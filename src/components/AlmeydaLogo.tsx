import React from 'react';
import { getAssetUrl } from '../utils/assetUrl';

interface AlmeydaLogoProps {
  className?: string;
  id?: string;
  glow?: boolean;
}

export const AlmeydaLogo: React.FC<AlmeydaLogoProps> = ({
  className = "w-full max-w-2xl h-auto",
  id = "almeyda-brand-logo",
  glow = true
}) => {
  const logoUrl = getAssetUrl('images/almeyda-logo.svg');

  return (
    <img
      id={id}
      src={logoUrl}
      alt="Almeyda - Caffè del Teatro"
      className={`${className} object-contain select-none pointer-events-none transition-all duration-300 ${
        glow ? 'filter drop-shadow-[0_2px_18px_rgba(212,175,55,0.3)]' : ''
      }`}
      loading="eager"
      decoding="async"
    />
  );
};

