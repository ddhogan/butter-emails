Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: 'application#index'
  resources :posts
  
  # login_path
  post '/login' => 'users#login'

  #signup_path
  post 'signup' => 'users#create'

  #logout_path
  post '/logout' => 'users#logout'

end