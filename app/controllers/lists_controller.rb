class ListsController < ApplicationController
  def create
    @list = List.create!(params[:list])
  end

  def destroy
    list = List.find(params[:id])
    list.destroy
    render nothing: true
  end
end