//Sucategory page with rendered products
import useSWR from "swr";
import { getData } from "../../services/api";
import Link from "next/link";
import { useRouter } from "next/router";


export default function NavList() {
  const router = useRouter();
  const { subcategory, category } = router.query;

  console.log(subcategory, category);

  const filterField = subcategory ? "subcategory" : category ? "category" : null;
  const filterValue = subcategory || category;  

  const adsUrl = filterField ? `/ads?filters[${filterField}][name][$eq]=${filterValue}` : "/ads";
  

  const { data: ads } = useSWR(adsUrl, getData);

  return (
    <div className=" py-6 font-medium text-[#373373]  ">
      <h1>{subcategory ? subcategory : category ? category : null}</h1>
      {ads?.length > 0 && (
        <div className="flex flex-col items-center justify-start">
          {ads?.map((ad) => {
            const adName = ad.attributes.title;
            const adId = ad.id;
            return (
              <Link href={"/ads/" + adId} key={adId}>
                {adName}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
