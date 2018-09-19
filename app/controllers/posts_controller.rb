class PostsController < ApplicationController::API
  def index
    render json: Post.all
  end
end