import useRockets from '../../hooks/useRockets';
import ErrorMessage from '../ErrorMessage';
import LoadingCircle from '../LoadingCircle';
import RocketSnippet from './RocketSnippet';

export default function RocketsContainer() {
  const { data, error, isLoading } = useRockets();

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  if (isLoading) {
    return <LoadingCircle />;
  }

  return (
    <section className="m-auto max-w-screen-sm ">
      {data?.map(rocket => (
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
