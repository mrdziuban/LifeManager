class ListsController < ApplicationController
  before_filter :authenticate_user!
  
  def create
    @list = List.create!(params[:list])
    if request.xhr?
      render partial: "users/list", locals: {list: @list}
    end
  end

  def show
    @list = List.find(params[:id])
  end

  def destroy
    list = List.find(params[:id])
    list.destroy
    if request.xhr?
      render nothing: true
    else
      redirect_to root_url
    end
  end
end