class List < ActiveRecord::Base
  attr_accessible :title, :user_id

  validates :title, presence: true

  belongs_to :user
end
