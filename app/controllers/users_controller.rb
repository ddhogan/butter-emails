class UsersController < ApplicationController
  
  def index

  end
  
  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :post_ids => [])
  end

end