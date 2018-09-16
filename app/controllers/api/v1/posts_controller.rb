class Api::V1::PostsController < Api::V1::BaseController
  def index
    respond_with Post.all
  end
end