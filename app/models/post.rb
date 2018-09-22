class Post < ApplicationRecord

  belongs_to :user

  validates_presence_of :username
  validates :username, uniqueness: { scope: :username, message: "An account with that username already exists"}
  
end
