# frozen_string_literal: true

class SessionsController < ApplicationController
  def create
    @site = SiteDetail.find_by(name: login_params[:name])
    unless @site.present? && @site.authenticate(login_params[:password])
      render status: :unauthorized, json: { error: "Incorrect credentials, try again." }
    end
  end

  private

    def login_params
      params.require(:login).permit(:name, :password)
    end
end
