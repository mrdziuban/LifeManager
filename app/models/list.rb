class List < ActiveRecord::Base
  attr_accessible :title, :user_id
  default_scope :include => :items

  validates :title, presence: true

  belongs_to :user
  has_many :items
end
