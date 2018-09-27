Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: 'application#index'
  resources :posts
  
  post 'user_token' => 'user_token#create'
  post 'find_user' => 'users#find'

  #signup_path
  # post 'signup' => 'users#create'

  get '/users' => 'users#show'
  post '/users' => 'users#create'

end