import { useRouter } from 'next/router';

export default function SearchPage() {
  const router = useRouter();
  const {category, q} = router.query;

  console.log(category, q);

  //build url string as: filters category(not all) and title containsi q or description containsi q
  
  
  return <h1>Search</h1>;
}
