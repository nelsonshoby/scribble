# frozen_string_literal: true

class RedirectionsController < ApplicationController
  before_action :load_redirection, only: [:update, :destroy]

  def index
    @redirections = Redirection.all
  end

  def update
    if @redirection.update(redirection_params)
      render status: :ok, json: {
        notice: t("successfully_updated", entity: "Redirection")
      }
    else
      render status: :unprocessable_entity, json: { error: @redirection.errors.full_messages }
    end
  end

  def destroy
    if @redirection.destroy
      render status: :ok, json: {
        notice: t("successfully_destroyed", entity: "Redirection")
      }
    else
      render status: :unprocessable_entity,
        json: { error: @redirection.errors.full_messages.to_sentence }
    end
  end

  def create
    if (redirection = Redirection.new(redirection_params)) && redirection.save!
      render status: :ok, json: {
        notice: t("successfully_created", entity: "Redirection")
      }
    else
      render status: :unprocessable_entity, json: { error: redirection.errors.full_messages.to_sentence }
    end
  end

  private

    def load_redirection
      @redirection = Redirection.find_by_id(params[:id])
    end

    def redirection_params
      params.require(:redirection).permit(:From, :To)
    end
end
