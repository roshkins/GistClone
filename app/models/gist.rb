class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id
  validate :title, :user_id, :presence => true

  belongs_to :user, :class_name => "User", :foreign_key => :user_id,
  :primary_key => :id

  has_many :favorites

  has_many :favoriting_users, :through => :favorites, :source => :user

  has_many :gist_files, :class_name => "GistFile", :primary_key => :id,
  :foreign_key => :gist_id

  def as_json(options)
    super(options.merge({:include => [:favorites, :gist_files]}))
  end
end