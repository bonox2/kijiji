//@ts-nocheck
//Subcategory page with rendered products
import { useRouter } from 'next/router';
import Loader from '../../components/PageParts/Loader';
import Error from '../../components/PageParts/Error';
import { useLazyQuery } from '@apollo/client';
import { ADS_BY_CATEGORY_Q } from '../../graphql/queries/ADS_BY_CATEGORY_Q';
import SearchAdCard from '../../components/PageParts/SearchAdCard';
import { useEffect, useState } from 'react';

export default function NavList() {
  const router = useRouter();
  const { subcategory, category } = router.query;
  const filterValue = subcategory || category;
  const [fetchAdsByCategory, { data, loading, error }] =
    useLazyQuery(ADS_BY_CATEGORY_Q);

  const [orderType, setOrderType] = useState({
    price: 'asc'
  });

  const sortSelectValue = Object.entries(orderType).flat().join('/');

  function handleOrderChange(e) {
    const selectedValue = e.target.value;
    const [orderType, orderValue] = selectedValue.split('/');
    setOrderType({
      [orderType]: orderValue
    });
  }

  useEffect(() => {
    fetchAdsByCategory({
      variables: {
        categoryName: filterValue,
        orderBy: orderType
      }
    });
  }, [fetchAdsByCategory, filterValue, orderType]);

  if (loading) return <Loader />;
  if (error) {
    console.log(error);
    return <Error/>;
  };

  const ads = data?.ads || [];

  return (
    <section className=" py-6 font-medium text-[#373373] container max-w-[1140px] mx-auto px-4 flex justify-between">
      <div className="w-56">
        <h2 className="label_header ">Order by</h2>
        <select
          name="sort"
          className=" h-min w-56  p-2 rounded text-[#373373]"
          onChange={handleOrderChange}
          value={sortSelectValue}>
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

      <div className=" ml-10 flex-1 ">
        <h1 className=" my-6 text-2xl w-full  text-[#42509f]">
          {subcategory ? subcategory : category ? category : null}
        </h1>

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
  );
}
