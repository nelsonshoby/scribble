# frozen_string_literal: true

class SiteDetailsController < ApplicationController
  before_action :load_site_details, only: [:show, :update]
  def show
    render
  end

  def update
    if @sitedetail.update(site_detail_params)
      render status: :ok, json: {
        notice: t("successfully_updated", entity: "SiteDetail")
      }
    else
      render status: :unprocessable_entity, json: { error: site.errors.full_messages }
    end
  end

  private

    def load_site_details
      @sitedetail = SiteDetail.first
    end

    def site_detail_params
      params.require(:site_detail).permit(:name, :password)
    end
end
