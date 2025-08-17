class Api::V1::ReportsController < ApplicationController
  before_action :authorize_request

  def daily
    date = parse_date(params[:date]) || Date.current
    readings = @current_user.blood_glucose_readings.on_date(date)
    render json: summary_for(readings, date: date), status: :ok
  end

  def month_to_date
    date = parse_date(params[:date]) || Date.current
    from = date.beginning_of_month
    to = date.end_of_day
    readings = @current_user.blood_glucose_readings.between_dates(from, date)
    render json: summary_for(readings, from: from, to: date), status: :ok
  end

  def monthly
    date = parse_date(params[:date]) || Date.current
    prev_month = (date - 1.month).beginning_of_month..(date - 1.month).end_of_month
    readings = @current_user.blood_glucose_readings.where(recorded_at: prev_month)
    render json: summary_for(readings, from: prev_month.first, to: prev_month.last), status: :ok
  end

  private

  def parse_date(d)
    Date.iso8601(d) rescue nil
  end

  def summary_for(scope, opts = {})
    stats = scope.select("COUNT(*) as count, MIN(reading_value) as min, MAX(reading_value) as max, AVG(reading_value) as avg").take
    {
      date_range: [opts[:from], opts[:to]].compact.map(&:to_s),
      count: stats.count.to_i,
      min: stats.min,
      max: stats.max,
      average: stats.avg&.to_f&.round(2)
    }
  end

end