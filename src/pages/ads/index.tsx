//Sucategory page with rendered products
import { useRouter } from "next/router";
import Loader from "../../components/PageParts/Loader";
import { useLazyQuery } from "@apollo/client";
import { ADS_BY_CATEGORY_Q } from "../../graphql/queries/ADS_BY_CATEGORY_Q";
import SearchAdCard from "../../components/PageParts/SearchAdCard";
import { useEffect, useState } from "react";

export default function NavList() {
  const router = useRouter();
  const { subcategory, category } = router.query;

  const filterValue = subcategory || category;

  const [fetchAdsByCategory, { data, loading, error }] =
    useLazyQuery(ADS_BY_CATEGORY_Q);

  const [byPrice, setByPrice] = useState("asc");

  useEffect(() => {
    fetchAdsByCategory({
      variables: {
        categoryName: filterValue,
        orderBy: {
          price: byPrice
          // created ago: byDate,
        },
      },
    });
  }, [fetchAdsByCategory, filterValue, byPrice, /* byDate */]);

  if (loading) return <Loader />;

  if (error) return <div>Something went wrong.</div>;
  

  const ads = data?.ads || [];

  return (
    <section className=" py-6 font-medium text-[#373373] container max-w-[1140px] mx-auto flex justify-between">
      <div className="w-full">
        <h2 className="label_header" >Price order</h2>
        <select name="sort" className=" h-min w-full  p-2 rounded text-[#"  value={byPrice} onChange={e=>setByPrice(e.target.value)} >
          <option value="">Sort by price</option>
          <option value="asc">High to Low</option>
          <option value="desc">Low to High</option>
        </select>
      </div>
      {/* <select name="" id="">
        <option value="">Sort by date</option>
        <option value="">Newest</option>
        <option value="">Oldest</option>
      </select> */}

      <div className=" ml-10 ">
        <h1 className=" my-6 text-2xl">
          {subcategory ? subcategory : category ? category : null}
        </h1>

        {ads.length > 0 && (
          <div className="flex flex-col items-center justify-start">
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
      </div>
    </section>
  );
}
