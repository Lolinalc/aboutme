import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Marquee() {
  const { t } = useTranslation();
  const items = t('marquee.items', { returnObjects: true });
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
