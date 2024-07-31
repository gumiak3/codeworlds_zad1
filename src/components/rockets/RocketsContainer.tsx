import { useEffect, useState } from 'react';
import useRockets, { rocketType } from '../../hooks/useRockets';
import RocketSnippet from './RocketSnippet';

export default function RocketsContainer() {
  const [rockets] = useRockets();
  return (
    <section className="m-auto max-w-screen-sm ">
      {rockets &&
        rockets.map(rocket => (
          <RocketSnippet
            key={rocket.id}
            id={rocket.id}
            title={rocket.name}
            imageUrl={rocket.imageUrl}
            active={rocket.active}
            firstFlightDate={rocket.firstFlightDate}
            country={rocket.country}
          />
        ))}
    </section>
  );
}
