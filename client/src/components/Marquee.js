import React from 'react';

const items = [
  'Diseño Web', 'Marketing Digital', 'Estrategia de Marca', 'SEO & Posicionamiento',
  'Meta Ads', 'Redes Sociales', 'Landing Pages', 'Consultoría Digital'
];

export default function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {track.map((item, i) => (
          <div className="marquee-item" key={i}>
            {item}
            <div className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}
