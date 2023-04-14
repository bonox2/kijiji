import { useRouter } from 'next/router';
import { getData } from '../../services/api';
import useSWR from 'swr';
import Loader from '../../components/PageParts/Loader';

export default function SearchPage() {
  const router = useRouter();
  const {category, q} = router.query;

  console.log(category, q);
  
  const Ads = category
    ? `/ads?filters${category}[name][$eq]=${category}&filters[title][$contains]=
    ${q}&filters[description][$contains]=${q}`
    : "/ads?populate=*";
  
  const { data: ads, error } = useSWR(Ads, getData);

  if (!ads) return <Loader />;
  if (error) return <div>Something went wrong.</div>;

  
  
  return <h1>Search</h1>;
}
