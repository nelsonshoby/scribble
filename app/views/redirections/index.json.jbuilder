# frozen_string_literal: true

json.redirection @redirections do |redirection|
  json.extract! redirection, :id, :From, :To
end
