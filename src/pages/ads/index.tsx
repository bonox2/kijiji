//Sucategory page with rendered products
import useSWR from "swr";
import { getData } from "../../services/api";
import Link from "next/link";


export default function NavList() {
  const { data: ads } = useSWR("/ads", getData);

  return (
    <div className=" py-6 font-medium text-[#373373]  ">
      <h1>Sugcategory</h1>
      {ads?.length > 0 && (
        <div className="flex items-center justify-start flex-column">
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
