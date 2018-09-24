class UsersController < ApplicationController
  
  def index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: @user
    else
      render json: { message: @user.errors }, status: :unprocessable_entity
    end
  end

  def login
    @user = User.find_by(username: params[:user][:username])
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      redirect_to root_path
    else
      redirect_to login_path
    end
  end

  def logout
    if session[:user_id]
      session.clear
      redirect_to root_path
    end
  end
  
  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :post_ids => [])
  end

end