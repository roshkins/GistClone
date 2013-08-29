class RootController < ApplicationController
  respond_to :index, :only => [:json]
  def index
    respond_to do |format|
      format.html {render :index}
    end
  end
end
