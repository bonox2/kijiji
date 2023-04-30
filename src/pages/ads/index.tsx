//Sucategory page with rendered products
import Link from 'next/link';
import { useRouter } from 'next/router';
import Loader from '../../components/PageParts/Loader';
import { useQuery } from '@apollo/client';
import { ADS_BY_CATEGORY_Q } from '../../graphql/queries/ADS_BY_CATEGORY_Q';


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
    <div className=" py-6 font-medium text-[#373373]  ">
      <h1>{subcategory ? subcategory : category ? category : null}</h1>
      {ads.length > 0 && (
        <div className="flex flex-col items-center justify-start">
          {ads.map((ad) => {
            const {id, title} = ad

            return (
              <Link href={'/ads/' + id} key={id}>
                {title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
