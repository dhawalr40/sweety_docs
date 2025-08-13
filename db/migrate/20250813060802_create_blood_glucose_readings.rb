class CreateBloodGlucoseReadings < ActiveRecord::Migration[8.0]
  def change
    create_table :blood_glucose_readings do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :reading_value, null: false
      t.datetime :recorded_at, null: false
      t.string :reading_type, null: false  # morning, afternoon, evening, bedtime
      t.timestamps
    end
    add_index :blood_glucose_readings, :recorded_at
  end
end
