import { Link } from 'react-router-dom';
import RocketSnippetDetail from './RocketSnippetDetail';

interface IRocketSnippet {
  title: string;
  imageUrl: string;
  id: string;
  active: boolean;
  firstFlightDate: string;
  country: string;
}

export default function RocketSnippet({
  title,
  imageUrl,
  country,
  firstFlightDate,
  active,
  id,
}: IRocketSnippet) {
  return (
    <article className="p-4 border-[1px] border-gray-500 rounded-lg mb-2 transition duration-300 ease-in-out hover:border-white">
      <Link
        to={`rocket/${id}`}
        className="grid cursor-pointer items-center grid-cols-1 md:grid-cols-4"
      >
        <div className="col-span-1 flex justify-center">
          <img src={imageUrl} alt={title} className="w-32 h-32 rounded-full" />
        </div>
        <div className="text-center col-span-3">
          {/* small details */}
          <RocketSnippetDetail label="Title" detail={title} />
          <RocketSnippetDetail label="Country" detail={country} />
          <RocketSnippetDetail label="First flight" detail={firstFlightDate} />
          <RocketSnippetDetail label="Active" detail={active} />
        </div>
      </Link>
    </article>
  );
}
