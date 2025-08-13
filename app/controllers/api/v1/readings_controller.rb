class Api::V1::ReadingsController < ApplicationController
  before_action :authorize_request

  def index
    readings = @current_user.blood_glucose_readings.order(recorded_at: :desc)
    render json: { data: readings }, status: :ok
  end

  def create
    reading = @current_user.blood_glucose_readings.new(reading_params)
    reading.save!
    render json: { data: reading, message: "Created" }, status: :created
  rescue StandardError => e
    render json: { data: {}, error: e.message }, status: :unprocessable_entity
  end

  private

  def reading_params
    params.require(:blood_glucose_reading).permit(:reading_value, :recorded_at, :reading_type)
  end
end