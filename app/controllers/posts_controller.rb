class PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      render json: { message: @post.errors }, status: 400
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    if @post.destroy
      render json: @post.as_json(only: [:id])
    else
      render json: { message: "could not delete" }, status: 400
    end
  end

  private

  def post_params
    params.require(:post).permit(:content)
  end

end