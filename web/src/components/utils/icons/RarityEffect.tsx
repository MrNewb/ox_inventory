import React from 'react';

type EffectType =
  | 'sparkle'
  | 'stinky'
  | 'megarainbow'
  | 'fire'
  | 'frost'
  | 'electric'
  | 'toxic'
  | 'shine'
  | 'glow'
  | 'cursed'
  | 'newb';

const effectRarities: Record<string, EffectType> = {
  sparkle: 'sparkle',
  sparkles: 'sparkle',
  stinky: 'stinky',
  stink: 'stinky',
  megarainbow: 'megarainbow',
  mega_rainbow: 'megarainbow',
  fire: 'fire',
  flame: 'fire',
  burning: 'fire',
  frost: 'frost',
  ice: 'frost',
  frozen: 'frost',
  electric: 'electric',
  shock: 'electric',
  charged: 'electric',
  toxic: 'toxic',
  poison: 'toxic',
  radioactive: 'toxic',
  shine: 'shine',
  shiny: 'shine',
  polished: 'shine',
  glow: 'glow',
  holy: 'glow',
  blessed: 'glow',
  cursed: 'cursed',
  haunted: 'cursed',
  newb: 'newb',
};

export const getRarityEffect = (rarity?: string | null): EffectType | null => {
  if (!rarity) return null;
  return effectRarities[String(rarity).toLowerCase()] || null;
};

const sparkles = [
  { top: '12%', left: '18%', size: 7, delay: 0 },
  { top: '26%', left: '68%', size: 6, delay: 0.25 },
  { top: '58%', left: '30%', size: 8, delay: 0.5 },
  { top: '45%', left: '82%', size: 5, delay: 0.75 },
  { top: '72%', left: '55%', size: 7, delay: 1 },
  { top: '20%', left: '45%', size: 4, delay: 1.25 },
  { top: '80%', left: '22%', size: 5, delay: 0.4 },
  { top: '38%', left: '12%', size: 6, delay: 0.9 },
  { top: '66%', left: '78%', size: 6, delay: 1.4 },
  { top: '15%', left: '85%', size: 4, delay: 0.6 },
  { top: '50%', left: '48%', size: 5, delay: 1.1 },
  { top: '85%', left: '68%', size: 4, delay: 0.15 },
];

const stinkClouds = [
  { left: '18%', size: 18, delay: 0 },
  { left: '40%', size: 22, delay: 0.6 },
  { left: '58%', size: 19, delay: 1.2 },
  { left: '30%', size: 16, delay: 1.8 },
  { left: '68%', size: 20, delay: 2.4 },
  { left: '48%', size: 15, delay: 3 },
];

const rainbows = [
  { left: '6%', bottom: '16%', scale: 1, delay: 0 },
  { left: '50%', bottom: '40%', scale: 0.8, delay: 0.8 },
  { left: '28%', bottom: '62%', scale: 0.6, delay: 1.6 },
  { left: '66%', bottom: '20%', scale: 0.7, delay: 2.2 },
  { left: '12%', bottom: '54%', scale: 0.55, delay: 1.2 },
];

const flames = [
  { left: '14%', size: 16, delay: 0 },
  { left: '32%', size: 22, delay: 0.2 },
  { left: '50%', size: 26, delay: 0.1 },
  { left: '68%', size: 21, delay: 0.35 },
  { left: '84%', size: 15, delay: 0.5 },
];

const snowflakes = [
  { left: '12%', size: 5, delay: 0, dur: 3.4 },
  { left: '30%', size: 4, delay: 0.8, dur: 4 },
  { left: '48%', size: 6, delay: 1.6, dur: 3 },
  { left: '64%', size: 4, delay: 0.4, dur: 3.8 },
  { left: '80%', size: 5, delay: 2.2, dur: 3.3 },
  { left: '22%', size: 3, delay: 2.8, dur: 4.2 },
  { left: '72%', size: 3, delay: 1.2, dur: 3.6 },
];

const bolts = [
  { left: '24%', delay: 0 },
  { left: '58%', delay: 0.9 },
  { left: '40%', delay: 1.7 },
];

const bubbles = [
  { left: '20%', size: 8, delay: 0, dur: 2.8 },
  { left: '42%', size: 11, delay: 0.7, dur: 3.2 },
  { left: '60%', size: 9, delay: 1.4, dur: 2.6 },
  { left: '34%', size: 7, delay: 2, dur: 3 },
  { left: '70%', size: 10, delay: 1, dur: 3.4 },
];

const MiniRainbow: React.FC = () => (
  <svg className="mini-rainbow-svg" viewBox="0 0 40 22" width="1em" height="1em">
    <path d="M4 22 A16 16 0 0 1 36 22" fill="none" stroke="#ff3b3b" strokeWidth="2.4" />
    <path d="M6.8 22 A13.2 13.2 0 0 1 33.2 22" fill="none" stroke="#ff9f1c" strokeWidth="2.4" />
    <path d="M9.6 22 A10.4 10.4 0 0 1 30.4 22" fill="none" stroke="#ffe14d" strokeWidth="2.4" />
    <path d="M12.4 22 A7.6 7.6 0 0 1 27.6 22" fill="none" stroke="#3bd16f" strokeWidth="2.4" />
    <path d="M15.2 22 A4.8 4.8 0 0 1 24.8 22" fill="none" stroke="#3b82f6" strokeWidth="2.4" />
  </svg>
);

const Bolt: React.FC = () => (
  <svg className="bolt-svg" viewBox="0 0 12 32" width="1em" height="1em">
    <path d="M7 0 L1 18 L5 18 L3 32 L11 12 L6 12 Z" fill="#eaf6ff" stroke="#7cc4ff" strokeWidth="1" />
  </svg>
);

const RarityEffect: React.FC<{ rarity?: string | null }> = ({ rarity }) => {
  const effect = getRarityEffect(rarity);
  if (!effect) return null;

  switch (effect) {
    case 'sparkle':
      return (
        <div className="rarity-effect">
          {sparkles.map((s, i) => (
            <span
              key={i}
              className="sparkle"
              style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
            />
          ))}
        </div>
      );

    case 'stinky':
      return (
        <div className="rarity-effect">
          {stinkClouds.map((s, i) => (
            <span
              key={i}
              className="stink"
              style={{ left: s.left, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
            />
          ))}
        </div>
      );

    case 'megarainbow':
      return (
        <div className="rarity-effect">
          {rainbows.map((r, i) => (
            <span
              key={i}
              className="mini-rainbow"
              style={{ left: r.left, bottom: r.bottom, fontSize: `${11 * r.scale}px`, animationDelay: `${r.delay}s` }}
            >
              <MiniRainbow />
            </span>
          ))}
        </div>
      );

    case 'fire':
      return (
        <div className="rarity-effect">
          {flames.map((f, i) => (
            <span
              key={i}
              className="flame"
              style={{ left: f.left, width: f.size, height: f.size, animationDelay: `${f.delay}s` }}
            />
          ))}
        </div>
      );

    case 'frost':
      return (
        <div className="rarity-effect">
          <span className="frost-tint" />
          {snowflakes.map((s, i) => (
            <span
              key={i}
              className="snowflake"
              style={{
                left: s.left,
                width: s.size,
                height: s.size,
                animationDelay: `${s.delay}s`,
                animationDuration: `${s.dur}s`,
              }}
            />
          ))}
        </div>
      );

    case 'electric':
      return (
        <div className="rarity-effect">
          {bolts.map((b, i) => (
            <span key={i} className="bolt" style={{ left: b.left, animationDelay: `${b.delay}s` }}>
              <Bolt />
            </span>
          ))}
        </div>
      );

    case 'toxic':
      return (
        <div className="rarity-effect">
          <span className="toxic-tint" />
          {bubbles.map((b, i) => (
            <span
              key={i}
              className="bubble"
              style={{
                left: b.left,
                width: b.size,
                height: b.size,
                animationDelay: `${b.delay}s`,
                animationDuration: `${b.dur}s`,
              }}
            />
          ))}
        </div>
      );

    case 'shine':
      return (
        <div className="rarity-effect">
          <span className="shine-sweep" />
        </div>
      );

    case 'glow':
      return (
        <div className="rarity-effect">
          <span className="glow-aura" />
        </div>
      );

    case 'cursed':
      return (
        <div className="rarity-effect">
          <span className="cursed-aura" />
          {stinkClouds.slice(0, 4).map((s, i) => (
            <span
              key={i}
              className="cursed-smoke"
              style={{ left: s.left, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
            />
          ))}
        </div>
      );

    case 'newb':
      return (
        <div className="rarity-effect">
          <span className="newb-taco" role="img" aria-label="taco">
            🌮
          </span>
        </div>
      );

    default:
      return null;
  }
};

export default RarityEffect;
