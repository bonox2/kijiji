import { useRouter } from "next/router";
import Loader from "../../components/PageParts/Loader";
import Error from "../../components/PageParts/Error";
import SearchAdCard from "../../components/PageParts/SearchAdCard";
import { SEARCH_ADS_Q } from "../../graphql/queries/SEARCH_ADS_Q";
import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

export default function SearchPage() {
  const router = useRouter();
  const { category, q } = router.query;
  const [fetchAdsByCategory, { data, loading, error }] =
    useLazyQuery(SEARCH_ADS_Q);

  const [orderType, setOrderType] = useState<any>({
    price: "asc",
  });

  const sortSelectValue = Object.entries(orderType).flat().join("/");

  function handleOrderChange(e) {
    const selectedValue = e.target.value;
    const [orderType, orderValue] = selectedValue.split("/");
    setOrderType({
      [orderType]: orderValue,
    });
  }

  useEffect(() => {
    fetchAdsByCategory({
      variables: {
        categoryName: category === "all" ? undefined : category,
        query: q,
        orderBy: orderType,
      },
    });
  }, [fetchAdsByCategory, orderType, q, category]);

  if (loading) return <Loader />;
  if (error) {
    console.log(error);
    return <Error/>;
  };

  const ads = data?.ads || [];

  console.log({ ads });

  return (
    <>
      <section className=" container max-w-[1140px] mx-auto px-4 flex justify-between">
        <div className="w-56">
          <h2 className="label_header ">Order by</h2>
          <select
            name="sort"
            className=" h-min w-56  p-2 rounded text-[#373373]"
            onChange={handleOrderChange}
            value={sortSelectValue}
          >
            <option value="createdAt/asc">Newest First</option>
            <option value="createdAt/desc">Latest First</option>
            <option value="price/desc">Price (low to high)</option>
            <option value="price/asc">Price (high to low)</option>
            <option value="title/asc">Title (A to Z)</option>
            <option value="title/desc">Title (Z to A)</option>
            <option value="description/asc">Description (A to Z)</option>
            <option value="description/desc">Description (Z to A)</option>
          </select>
        </div>
        <div className="flex-1 ml-10">
          <h1 className="my-6 text-2xl w-full  text-[#42509f]">{category}</h1>
          {ads?.length > 0 && (
            <div className="flex flex-col items-center justify-start">
              {ads?.map((ad) => {
                const adName = ad.title;
                const adId = ad.id;
                const price = ad.price;
                const adCoverImg = ad.coverImg?.url;
                const adLink = "/ads/" + adId;
                const adDescription = ad.description;
                const adCity = ad.address?.locality;
                return (
                  <SearchAdCard
                    adLink={adLink}
                    key={adId}
                    title={adName}
                    imgLink={adCoverImg}
                    price={price}
                    description={adDescription}
                    city={adCity}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
