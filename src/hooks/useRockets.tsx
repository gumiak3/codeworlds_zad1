import { useEffect, useState } from "react";
const URL = "https://api.spacexdata.com/v3/rockets";

export type rocketType = {
    id: number;
    name: string;
    description: string;
};

const useRockets = () => {
    const [rockets, setRockets] = useState<rocketType[]>();

    // get id, rocket_name, description
    function filterRocketsInfo(data: any[]): rocketType[] {
        return data.map((rocket) => ({
            id: Number(rocket.id),
            name: String(rocket.rocket_name),
            description: String(rocket.description),
        }));
    }
    useEffect(() => {
        async function fetchRockets(url: string) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Couldn't fetch data from API`);
                }
                const data = await response.json();
                const filteredData = filterRocketsInfo(data);
                setRockets(filteredData);
            } catch (err) {
                console.error(err);
            }
        }
        fetchRockets(URL);
    }, [URL]);

    return [rockets];
};

export default useRockets;
