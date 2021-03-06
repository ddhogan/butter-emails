class UsersController < ApplicationController
  before_action :authenticate_user, only: [:find]
  before_action :set_user, only: [:show, :update, :destroy]

  def index
  end

  def find
    @user = User.find_by(email: params[:user][:email])
    if @user
      render json: @user
    else
      @errors = @user.errors.full_messages
      render json: @errors
    end
  end
  
  def show
    render :json => @user, :include => :posts
  end
   
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: { message: @user.errors }, status: :unprocessable_entity
    end
  end
  
  private

  def set_user
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation, :post_ids => [])
  end

end