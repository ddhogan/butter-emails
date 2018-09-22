# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

borpo = User.create(username: 'borpo', password_digest: BCrypt::Password.create('password'))
borpo.save
Post.create(content: 'borpo will destroy you', user: borpo)
Post.create(content: 'borpo just had a mimosa', user: borpo)

ladyShellington = User.create(username: 'LadyShellington', password_digest: BCrypt::Password.create('chicken'))
ladyShellington.save
Post.create(content: 'i am a chicken', user: ladyShellington)
Post.create(content: 'In preparing for battle I have always found that plans are useless, but planning is indispensable.', user: ladyShellington)