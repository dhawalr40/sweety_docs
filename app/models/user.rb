class User < ApplicationRecord
  has_secure_password
  has_many :blood_glucose_readings, dependent: :destroy

  validates :email, presence: true, uniqueness: true

end
