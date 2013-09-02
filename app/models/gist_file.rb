class GistFile < ActiveRecord::Base
  attr_accessible :body, :name, :gist_id

  validate :body, :name, :presence => true

  belongs_to :gist, :class_name => "Gist", :primary_key => :id,
  :foreign_key => :gist_id
end
