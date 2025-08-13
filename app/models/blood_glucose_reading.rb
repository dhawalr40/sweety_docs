class BloodGlucoseReading < ApplicationRecord
  belongs_to :user

  READING_TYPES = %w[morning afternoon evening bedtime].freeze
  MIN_GLUCOSE = 40
  MAX_GLUCOSE = 600

  validates :user, presence: true
  validates :reading_value, presence: true,
            numericality: { only_integer: true,
                            greater_than_or_equal_to: MIN_GLUCOSE,
                            less_than_or_equal_to: MAX_GLUCOSE }
  validates :recorded_at, presence: true
  validates :reading_type, presence: true,
            inclusion: { in: READING_TYPES }

  validate :max_four_readings_per_day
  validate :no_duplicate_time_slot

  scope :for_user, ->(user_id) { where(user_id: user_id) }
  scope :on_date, ->(date) { where(recorded_at: date.beginning_of_day..date.end_of_day) }
  scope :between_dates, ->(from, to) { where(recorded_at: from.beginning_of_day..to.end_of_day) }

  private

  def max_four_readings_per_day
    if user.blood_glucose_readings
           .where('DATE(recorded_at) = ?', recorded_at.to_date)
           .count >= 4
      errors.add(:base, 'Maximum of 4 readings allowed per day')
    end
  end

  def no_duplicate_time_slot
    if user.blood_glucose_readings
           .where(reading_type: reading_type)
           .where('DATE(recorded_at) = ?', recorded_at.to_date)
           .exists?
      errors.add(:reading_type, 'already has a reading for this time slot today')
    end
  end

end
