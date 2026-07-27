import React from 'react';

const rarityColors: Record<string, string> = {
  common: '#c8c8c8',
  uncommon: '#1eff00',
  rare: '#0070dd',
  epic: '#a335ee',
  legendary: '#ff8000',
  mythic: '#ff2d2d',
  exotic: '#f5e050',
  ancient: '#cd7f32',
  relic: '#ffd700',
  divine: '#fff2b0',
  celestial: '#00e5ff',
  transcendent: '#2dd4bf',
  ascended: '#87cefa',
  artifact: '#e6cc80',
  unique: '#a3e635',
  rainbow: '#ffffff',
};

export const getRarityColor = (rarity?: string | null): string | null => {
  if (!rarity) return null;
  return rarityColors[String(rarity).toLowerCase()] || null;
};

const RarityStar: React.FC<{ rarity?: string | null }> = ({ rarity }) => {
  const color = getRarityColor(rarity);
  if (!color) return null;

  const isRainbow = String(rarity).toLowerCase() === 'rainbow';

  return (
    <div className="rarity-star-wrapper">
      <svg
        className={`rarity-star${isRainbow ? ' rarity-star-rainbow' : ''}`}
        viewBox="0 0 576 512"
        width="1em"
        height="1em"
        fill="currentColor"
        style={{
          color: isRainbow ? undefined : color,
          filter: `drop-shadow(0 0 3px ${color})`,
        }}
      >
        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.6 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.6-57.4 0z" />
      </svg>
    </div>
  );
};

export default RarityStar;
