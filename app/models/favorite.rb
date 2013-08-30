class Favorite < ActiveRecord::Base
  attr_accessible :gist_id, :user_id

  validates :gist_id, :user_id, :presence => true, :uniqueness => true

  belongs_to :gist
  belongs_to :user
end
