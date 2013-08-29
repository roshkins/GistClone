Gistapp::Application.routes.draw do
  resources :users, :only => [:new, :create, :show]

  resource :session, :only => [:new, :create, :destroy]

  resources :gists, :only => [:create, :show, :update, :destroy, :index] do
    resource :favorite, :only => [:create, :destroy]
  end
  resources :favorites, :only => [:index]

  root :to => "root#index"
end
