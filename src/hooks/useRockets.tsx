import { useEffect, useState } from "react";
const URL = "https://api.spacexdata.com/v3/rockets";

export type rocketType = {
    id: string;
    name: string;
    imageUrl: string;
    firstFlightDate: string;
    country: string;
    active: boolean;
};

const useRockets = () => {
    const [rockets, setRockets] = useState<rocketType[]>();

    // get id, rocket_name, description
    function filterRocketsInfo(data: any[]): rocketType[] {
        return data.map((rocket) => ({
            id: String(rocket.rocket_id),
            name: String(rocket.rocket_name),
            country: String(rocket.country),
            imageUrl: String(rocket.flickr_images[0]),
            firstFlightDate: String(rocket.first_flight),
            active: Boolean(rocket.active),
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
                console.log(filteredData);
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
