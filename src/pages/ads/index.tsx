//Subcategory page with rendered products
import useSWR from "swr";
import { getData } from "../../services/api";
import Link from "next/link";
import { useRouter } from "next/router";
import Loader from "../../components/PageParts/Loader";
import AdCard from "../../components/PageParts/AdCard";
import { BASE_BE_URL } from "../../../constants";

export default function NavList() {
  const router = useRouter();
  const { subcategory, category } = router.query;

  const filterField = subcategory
    ? "subcategory"
    : category
    ? "category"
    : null;
  const filterValue = subcategory || category;

  const adsUrl = filterField
    ? `/ads?populate=*?filters[${filterField}][name][$eq]=${filterValue}`
    : "/ads?populate=*";

  const { data: ads, error } = useSWR(adsUrl, getData);

  if (!ads) return <Loader />;
  if (error) return <div>Something went wrong.</div>;

  return (
    <main className=" py-6 font-medium text-[#373373] container mx-auto w-full ">
      <section>
        <h1 className=" mb-10 text-[24px] font-bold  text-[#3e4153];">{subcategory ? subcategory : category ? category : null}</h1>
        {ads?.length > 0 && (
          <div className="flex flex-rov items-center justify-start gap-8">
            {ads?.map((ad) => {
              const adName = ad.attributes.title;
              const adId = ad.id;
              const price = ad.attributes.price;
              // .data.attributes.url; Can't get this to work
              const adCoverImg = ad.attributes.coverImg;
              // 
              const imgLink = BASE_BE_URL + adCoverImg;
              const adLink = "/ads/" + adId;
              return (
                  <AdCard
                    adLink={adLink}
                    key={adId}
                    title={adName}
                    imgLink={imgLink}
                    price={price}
                  />
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
