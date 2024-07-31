import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ActiveLabel from '../components/ActiveLabel';
import ImageCarousel from '../components/ImageCarousel';
import RocketSnippetDetail from '../components/rockets/RocketSnippetDetail';

type rocketDetailType = {
  active: boolean;
  country: string;
  description: string;
  firstFlight: string;
  images: string[];
  name: string;
};

export default function RocketDetail() {
  const { id } = useParams();
  const [details, setDetails] = useState<rocketDetailType>();

  function filterData(data: any): rocketDetailType {
    return {
      firstFlight: data.first_flight,
      images: data.flickr_images,
      name: data.rocket_name,
      ...data,
    };
  }

  useEffect(() => {
    async function fetchRocket() {
      try {
        const response = await fetch(
          `https://api.spacexdata.com/v3/rockets/${id}`,
        );
        if (!response.ok) {
          throw new Error(`Couldn't fetch data from API`);
        }
        const data = await response.json();
        console.log(data);
        setDetails(filterData(data));
      } catch (err) {
        console.error(err);
      }
    }
    fetchRocket();
  }, []);
  return (
    <section className="max-w-screen-xl m-auto ">
      {details && (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-5 ">
          <div className="col-span-2 flex justify-center">
            <ImageCarousel images={details.images} />
          </div>
          <div className="col-span-3 flex flex-col gap-2">
            <h1 className="underline text-center">{details.name}</h1>
            <ActiveLabel isActive={details.active} />
            <RocketSnippetDetail label={'Country'} detail={details.country} />
            <RocketSnippetDetail
              label={'First Flight'}
              detail={details.firstFlight}
            />
            <div>
              <p>Description: </p>
              <p>{details.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
