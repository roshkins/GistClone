class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id
  validate :title, :presence => true

  belongs_to :user, :class_name => "User", :foreign_key => :user_id,
  :primary_key => :id
end
