import { useEffect, useState } from "react";
import useRockets, { rocketType } from "../../hooks/useRockets";
import RocketSnippet from "./RocketSnippet";

export default function RocketsContainer() {
    const [rockets] = useRockets();
    return (
        <section>
            {rockets &&
                rockets.map((rocket) => (
                    <RocketSnippet
                        key={rocket.id}
                        title={rocket.name}
                        description={rocket.description}
                    />
                ))}
        </section>
    );
}
