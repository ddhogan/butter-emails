class User < ApplicationRecord

  has_secure_password

  has_many :posts
  
  validates_presence_of :username
  validates :username, uniqueness: { scope: :username, message: "An account with that username already exists"}
end
