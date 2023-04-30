import { useRouter } from 'next/router';
import Loader from "../../components/PageParts/Loader";
import SearchAdCard from "../../components/PageParts/SearchAdCard";
import { timeAgo } from "../../utils/timeAgo";
import { useQuery } from '@apollo/client';
import { SEARCH_ADS_Q } from '../../graphql/queries/SEARCH_ADS_Q';


export default function SearchPage() {
  const router = useRouter();
  const {category, q} = router.query;


  const { data, error,loading } = useQuery(SEARCH_ADS_Q);
  const ads = data?.ads || [];


  if (loading) return <Loader />;
  if (error) return <div>Something went wrong.</div>;

  return (
    <>
      <h1 className=" mb-10 text-[24px] font-bold  text-[#3e4153];">
        {category}
      </h1>
      {ads?.length > 0 && (
        <div className="flex flex-rov items-center justify-start gap-8">
          {ads?.map((ad) => {
            const adName = ad.title;
            const adId = ad.id;
            const price = ad.price;
            const adCoverImg = ad.coverImg.url;
            const adLink = "/ads/" + adId;
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
    </>
  );
  
  
  return <h1>Search</h1>;
}
