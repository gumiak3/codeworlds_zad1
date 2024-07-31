import { useQuery } from '@tanstack/react-query';
import { RocketType } from '../types/rocketTypes';

const useRockets = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['rockets'],
    queryFn: () => fetchRockets(import.meta.env.VITE_API_URL),
  });

  function filterRocketsInfo(data: any[]): RocketType[] {
    return data.map(rocket => ({
      id: String(rocket.rocket_id),
      name: String(rocket.rocket_name),
      country: String(rocket.country),
      imageUrl: String(rocket.flickr_images[0]),
      firstFlightDate: String(rocket.first_flight),
      active: Boolean(rocket.active),
    }));
  }
  async function fetchRockets(url: string): Promise<RocketType[]> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Couldn't fetch data from API`);
    }
    const data = await response.json();
    return filterRocketsInfo(data);
  }

  return { data, error, isLoading };
};

export default useRockets;
