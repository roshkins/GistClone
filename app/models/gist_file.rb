class GistFile < ActiveRecord::Base
  attr_accessible :body, :name

  validate :body, :name, :presence => true
end
