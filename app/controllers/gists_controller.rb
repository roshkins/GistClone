class GistsController < ApplicationController
  def index
    @gists = current_user.gists.all
    render :json => @gists
  end

  def create
    gist = Gist.new(params[:gist])
    if gist.save
      current_user.gists << gist
      respond_to do |format|
        format.json {render :json => gist}
      end
    else
      render :json => gist.errors, :status => :unprocessable_entity
    end
  end
end
