class ApplicationController < ActionController::API
  # protect_from_forgery with: :exception
  include Knock::Authenticable
  
  def index  
  end
  
  private

  def logged_in?
    !!current_user
  end
  
end
