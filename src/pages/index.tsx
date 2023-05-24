import { useRouter } from 'next/router';
import Loader from '../components/PageParts/Loader';
// import { timeAgo } from '../../utils/timeAgo';
import { useQuery } from '@apollo/client';
import AdCard from '../components/PageParts/AdCard';
import Navbar from "../components/PageParts/Navbar";
import { ADS_CARD_Q } from '../graphql/queries/ADS_CARD_Q ';


export default function SearchPage() {
  const router = useRouter();
  const { category, q } = router.query;

  const { data, error, loading } = useQuery(ADS_CARD_Q, {
  });

  if (loading) return <Loader />;
  if (error) return <div>Something went wrong.</div>;

  const ads = data?.ads || [];

  

  return (
    <>
        <Navbar />
      <section className='container mx-auto max-w-[1140px]'>
      {ads?.length > 0 && (
        <div className="  flex items-center justify-start gap-8 mt-7">
          {ads?.map((ad) => {
            const adName = ad.title;
            const adId = ad.id;
            const price = ad.price;
            const adCoverImg = ad.coverImg.url;
            const adLink = '/ads/' + adId;
            return (
              <AdCard
                adLink={adLink}
                key={adId}
                title={adName}
                imgLink={adCoverImg}
                price={price}
              />
            );
          })}
        </div>
      )}
      </section>
    </>
  );
}
