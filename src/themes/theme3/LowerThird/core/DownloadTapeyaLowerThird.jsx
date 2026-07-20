import React from "react";
import { mergeControllerConfig } from "../config/mergeControllerConfig.js";

const TAPEYA_LOGO_URL =
  "https://d1nmw2vhka3zp0.cloudfront.net/app/images/logos/tapeya-logo-white.svg";

/**
 * DownloadTapeya lower third — same UI as FollowTapeya.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function DownloadTapeyaLowerThird({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const {
    headline = "FOR BALL BY BALL UPDATES DOWNLOAD",
    site = "Tapeya App",
    tapeyaLogoUrl = TAPEYA_LOGO_URL,
  } = match;

  return (
    <div className="controller-scaled relative w-full shrink-0 overflow-hidden font-controller select-none">
      <div className="mb-[calc(45px*var(--cs))] w-full px-[calc(210px*var(--cs))]">
        <div className="relative flex h-bar w-full items-stretch overflow-hidden bg-panel-player">
          <div className="relative z-[1] flex h-full shrink-0 items-stretch">
            <div className="flex w-[calc(139px*var(--cs))] shrink-0 items-center justify-center bg-transparent px-[calc(16px*var(--cs))] py-[calc(12px*var(--cs))]">
              <img
                src={tapeyaLogoUrl}
                alt="Tapeya"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="w-px shrink-0 self-stretch bg-divider" aria-hidden="true" />
          </div>

          <div className="relative z-[1] flex min-w-0 flex-1 flex-col bg-transparent">
            <div className="flex h-[calc(56px*var(--cs))] shrink-0 items-center bg-transparent px-[calc(28px*var(--cs))]">
              <span className="ctrl-t-summary-title uppercase text-white">
                {headline}
              </span>
            </div>

            {site ? (
              <div className="flex h-[calc(83px*var(--cs))] min-h-0 flex-1 items-center border-t border-divider bg-transparent px-[calc(28px*var(--cs))]">
                <span className="ctrl-t-download-tapeya-site text-white">
                  {site}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
