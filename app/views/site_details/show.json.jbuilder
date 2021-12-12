# frozen_string_literal: true

json.sitedetail @sitedetail, :id, :name, :authentication_token
json.password @sitedetail.password_digest?
