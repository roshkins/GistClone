class GistsController < ApplicationController
  def index
    @gists = current_user.gists.all
    render :json => @gists
  end
end
