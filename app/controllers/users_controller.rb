class UsersController < ApplicationController
  before_filter :authenticate_user!
  
  def show
    @user = User.find(current_user.id, :include => :lists)
  end
end