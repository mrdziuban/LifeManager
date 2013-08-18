class ItemsController < ApplicationController
  def create

  end

  def toggle_complete
    @item = Item.find(params[:id])
    if @item.completed?
      @item.completed = false
      @item.save
    else
      @item.completed = true
      @item.save
    end
    render nothing: true
  end
end