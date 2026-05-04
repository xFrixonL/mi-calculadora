// src/pages/Details.tsx
import { PageLayout } from '../components/templates/PageLayout.js';
import type { TVShow } from '../types/tvShowTypes.js';

interface Props {
  show: TVShow | null;
  goBack: () => void;
}

function Details({ show, goBack }: Props) {
  if (!show) return null;

  return (
    <PageLayout title={show.name} onBack={goBack} backLabel="Back to Catalog">
      <div className="flex flex-col md:flex-row gap-8">
        <img src={show.image?.original} className="w-full md:w-1/3 rounded" alt={show.name} />
        <div className="flex-1">
          <p className="mb-4 text-gray-600">{show.genres?.join(", ")}</p>
          <div dangerouslySetInnerHTML={{ __html: show.summary }} />
        </div>
      </div>
    </PageLayout>
  );
}

export default Details;