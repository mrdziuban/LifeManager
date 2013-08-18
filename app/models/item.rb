class Item < ActiveRecord::Base
  attr_accessible :list_id, :text, :deadline

  belongs_to :list
end
