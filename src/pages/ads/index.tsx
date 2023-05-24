//Sucategory page with rendered products
import Link from 'next/link';
import { useRouter } from 'next/router';
import Loader from '../../components/PageParts/Loader';
import { useQuery } from '@apollo/client';
import { ADS_BY_CATEGORY_Q } from '../../graphql/queries/ADS_BY_CATEGORY_Q';
import SearchAdCard from '../../components/PageParts/SearchAdCard';



export default function NavList() {
  const router = useRouter();
  const { subcategory, category } = router.query;

  const filterValue = subcategory || category;

  const {data, loading, error} = useQuery(ADS_BY_CATEGORY_Q, {
    variables:{
      categoryName: filterValue,
    }
  })

  
  if (loading) return <Loader />;
  
  if (error) return <div>Something went wrong.</div>;

  const ads = data?.ads || [];

  return (
    <section className=" py-6 font-medium text-[#373373] container max-w-[1140px] mx-auto  ">
      <h1 className='ml-24 my-6 text-2xl'>{subcategory ? subcategory : category ? category : null}</h1>
      {ads.length > 0 && (
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
