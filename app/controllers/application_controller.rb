# frozen_string_literal: true

class ApplicationController < ActionController::Base
  def authenticate_user_using_x_auth_token
    auth_token = request.headers["X-Auth-Token"].presence

    if auth_token &&
      ActiveSupport::SecurityUtils.secure_compare(
        SiteDetail.first.authentication_token, auth_token
      )

    else
      render status: :unauthorized, json: {
        error: "Could not authenticate with the provided credentials"
      }
    end
  end
end
