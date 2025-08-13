class Api::V1::SessionsController < ApplicationController
  before_action :authorize_request, except: :login

  def new
    # render login form (optional if using API)
  end

  def login
    @user = User.find_by_email(params[:email])
    if @user&.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @user.id)
      time = Time.now + 24.hours.to_i
      render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M")}, status: 200
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  def destroy
    # session[:user_id] = nil
    # render json: { message: "Logged out successfully" }
  end

  private

  def login_params
    params.permit(:email, :password)
  end
end
