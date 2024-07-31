import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import ActiveLabel from '../components/ActiveLabel';
import ErrorMessage from '../components/ErrorMessage';
import ImageCarousel from '../components/ImageCarousel';
import LoadingCircle from '../components/LoadingCircle';
import RocketSnippetDetail from '../components/rockets/RocketSnippetDetail';
import { RocketDetailType } from '../types/rocketTypes';

export default function RocketDetail() {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ['rocketDetails', id],
    queryFn: () => fetchRocket(),
  });

  function filterData(data: any): RocketDetailType {
    return {
      firstFlight: data.first_flight,
      images: data.flickr_images,
      name: data.rocket_name,
      ...data,
    };
  }

  async function fetchRocket(): Promise<RocketDetailType> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Couldn't fetch data from API`);
    }
    const data = await response.json();
    return filterData(data);
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  if (isLoading) {
    return <LoadingCircle />;
  }

  return (
    <section className="max-w-screen-xl m-auto ">
      {data && (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-5 ">
          <div className="col-span-2 flex justify-center">
            <ImageCarousel images={data.images} />
          </div>
          <div className="col-span-3 flex flex-col gap-2">
            <h1 className="underline text-center">{data.name}</h1>
            <ActiveLabel isActive={data.active} />
            <RocketSnippetDetail label="Country" detail={data.country} />
            <RocketSnippetDetail
              label="First Flight"
              detail={data.firstFlightDate}
            />
            <div>
              <p>Description: </p>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
