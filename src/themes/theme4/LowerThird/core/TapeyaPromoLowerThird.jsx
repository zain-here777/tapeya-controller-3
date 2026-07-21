import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import { resolveTeamColor } from "../../config/teamColors.js";
import TapeyaLogo, {
  DEFAULT_TAPEYA_LOGO_URL,
} from "../components/tapeya/TapeyaLogo.jsx";
import TapeyaPromoCopy from "../components/tapeya/TapeyaPromoCopy.jsx";

/**
 * Theme 4 Tapeya promo bar — logo | headline + site.
 * Shared by FollowTapeya and DownloadTapeya.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {string} [props.match.headline]
 * @param {string} [props.match.site]
 * @param {string} [props.match.tapeyaLogoUrl]
 * @param {string} [props.match.colorKey]
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 * @param {string} props.fallbackHeadline
 * @param {string} props.fallbackSite
 * @param {boolean} [props.siteLowercase]
 */
export default function TapeyaPromoLowerThird({
  match,
  baseConfig,
  config: configOverride = {},
  fallbackHeadline,
  fallbackSite,
  siteLowercase = false,
}) {
  if (!match) return null;

  const config = mergeConfig(baseConfig, configOverride);
  const colorFallback = config.defaultTeamColorKey ?? "teamA";
  const backgroundColor = resolveTeamColor(match.colorKey, colorFallback);

  const headline =
    match.headline ?? config.fallbackHeadline ?? fallbackHeadline;
  const site = match.site ?? config.fallbackSite ?? fallbackSite;
  const tapeyaLogoUrl =
    match.tapeyaLogoUrl ??
    config.defaultTapeyaLogoUrl ??
    DEFAULT_TAPEYA_LOGO_URL;

  return (
    <div className="w-full shrink-0 select-none font-montserrat">
      <div className="mb-[calc(45px*var(--t4-scale))] w-full px-[calc(210px*var(--t4-scale))]">
        <div
          className="relative flex h-[var(--t4-bar-height)] w-full items-stretch overflow-hidden shadow-[0_-2px_10px_rgba(0,0,0,0.12)]"
          style={{ backgroundColor }}
        >
          <div className="relative z-[1] flex h-full shrink-0 items-stretch">
            <TapeyaLogo src={tapeyaLogoUrl} />
            <div
              className="w-px shrink-0 self-stretch bg-[var(--t4-divider)]"
              aria-hidden="true"
            />
          </div>

          <TapeyaPromoCopy
            headline={headline}
            site={site}
            siteLowercase={siteLowercase}
          />
        </div>
      </div>
    </div>
  );
}
