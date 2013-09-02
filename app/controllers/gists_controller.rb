class GistsController < ApplicationController
  def index
    @gists = current_user.gists.all
    render :json => @gists
  end

  def create
    # begin
      ActiveRecord::Base.transaction do
        gist_params = params[:gist].dup
        gist_params.delete(:gist_file)


        gist = current_user.gists.new(gist_params)
        puts gist
        gist_files = params[:gist][:gist_file].map do |_, values|
          GistFile.new(values);
        end
        gist.save!
        puts "Saved gist!"
        gist.gist_files = gist_files
        gist.gist_files.each do |gist_file|
          gist_file.save!
          puts "Saved gist file"
        end
      end

      current_user.gists << gist
      respond_to do |format|
        format.json {render :json => gist}
      end
    # rescue
    #   render :json => "Error", :status => :unprocessable_entity
    #   # render :json =>, :status => :unprocessable_entity
    # end
  end
end