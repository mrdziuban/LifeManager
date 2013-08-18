class AddDeadlineToItems < ActiveRecord::Migration
  def change
    add_column :items, :deadline, :date
  end
end
