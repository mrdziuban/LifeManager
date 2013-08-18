class ItemsController < ApplicationController
  before_filter :authenticate_user!
  
  def create
    @item = Item.create!(params[:item])
    if request.xhr?
      render partial: "users/item", locals: {item: @item}
    end
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