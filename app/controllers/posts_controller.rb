class PostsController < ApplicationController
  before_action :set_post, only: [:update, :destroy]
  
  def index
    render :json => Post.all, :include => :user
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :json => @post, :include => :user
    else
      render json: { message: @post.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      render :json => @post, :include => :user
    else
      render json: { message: @post.errors}, status: :unprocessable_entity 
    end
  end

  def destroy
    if @post.destroy
      render json: @post.as_json(only: [:id])
    else
      render json: { message: "could not delete" }, status: :unprocessable_entity
    end
  end

  private

  def set_post
    @post = Post.find_by(id: params[:id])
  end
  
  def post_params
    params.require(:post).permit(:content, :user_id)
  end

end