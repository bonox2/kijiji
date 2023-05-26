import { useRouter } from 'next/router';
import Loader from '../../components/PageParts/Loader';
import SearchAdCard from '../../components/PageParts/SearchAdCard';
import { timeAgo } from '../../utils/timeAgo';
import { useQuery } from '@apollo/client';
import { SEARCH_ADS_Q } from '../../graphql/queries/SEARCH_ADS_Q';

export default function SearchPage() {
  const router = useRouter();
  const { category, q } = router.query;

  const { data, error, loading } = useQuery(SEARCH_ADS_Q, {
    variables: {
      categoryName: category === 'all' ? undefined : category,
      query: q
    }
  });

  if (loading) return <Loader />;
  if (error) return <div>Something went wrong.</div>;

  const ads = data?.ads || [];

  console.log({ads});
  

  return (
    <section className=' container max-w-[1140px] mx-auto'>
      <h1 className=" my-6 text-4xl font-bold  text-[#42509f]">
        {category}
      </h1>
      {ads?.length > 0 && (
        <div className="flex flex-col items-center justify-start">
          {ads?.map((ad) => {
            const adName = ad.title;
            const adId = ad.id;
            const price = ad.price;
            const adCoverImg = ad.coverImg.url;
            const adLink = '/ads/' + adId;
            const adDescription = ad.description;
            const adCity = ad.address.locality;
            // const adStamp = ad.createdAt.slice(0, -1);
            // const adDateTime = adStamp?.split("T");
            // const adCreatedAtAgo = timeAgo(
            //   new Date(`${adDateTime[0]} ${adDateTime[1]}`)
            // );
            return (
              <SearchAdCard
                adLink={adLink}
                key={adId}
                title={adName}
                imgLink={adCoverImg}
                price={price}
                description={adDescription}
                city={adCity}
                // timeAgo={adCreatedAtAgo}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
