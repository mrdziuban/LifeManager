class ListsController < ApplicationController
  def create
    @list = List.create!(params[:list])
    if request.xhr?
      render partial: "users/list", locals: {list: @list}
    end
  end

  def destroy
    list = List.find(params[:id])
    list.destroy
    render nothing: true
  end
end