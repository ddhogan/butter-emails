# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

post = Post.create({ content: 'this is the very first post!' })

user = User.create(username: 'borpo', password_digest: BCrypt::Password.create('cilantro'), posts: [{content: 'borpo will destroy you'}])
