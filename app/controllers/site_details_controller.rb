# frozen_string_literal: true

class SiteDetailsController < ApplicationController
  def show
    @sitedetail = SiteDetail.first
  end

  def update
    site = SiteDetail.first
    p "site_detail_params", site_detail_params
    if site.update(site_detail_params)
      render status: :ok, json: {
        notice: t("successfully_updated", entity: "SiteDetail")
      }
    else
      render status: :unprocessable_entity, json: { error: site.errors.full_messages }
    end
  end

  private

    def site_detail_params
      params.require(:site_detail).permit(:name, :password)
    end
end
