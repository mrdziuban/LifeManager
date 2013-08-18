class List < ActiveRecord::Base
  attr_accessible :title, :user_id, :items_attributes
  default_scope :include => :items

  validates :title, presence: true

  belongs_to :user
  has_many :items, dependent: :destroy

  accepts_nested_attributes_for :items, reject_if: :all_blank
end
