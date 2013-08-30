class FavoritesController < ApplicationController
  def index
    @favorites = current_user.favorites.all
    render :json => @favorites
  end

  def create
    fav = Favorite.new(:user_id => current_user.id,
    :gist_id => params[:favorite][:gist_id])
    if fav.save
      render :json => fav
    else
      render :json => "Error with Favoriting.", :status => :unprocessable_entity
    end
  end

  def destroy
    fav = Favorite.find_by_gist_id(params[:gist_id])
    if fav.destroy
      render :json => fav
    else
      render :json => fav, :status => :unprocessable_entity
    end
  end
end
