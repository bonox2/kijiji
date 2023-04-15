import { useRouter } from "next/router";
import { getData } from "../../services/api";
import useSWR from "swr";
import Loader from "../../components/PageParts/Loader";
import SearchAdCard from "../../components/PageParts/SearchAdCard";
import { BASE_BE_URL } from "../../../constants";
import { timeAgo } from "../../utils/timeAgo";

export default function SearchPage() {
  const router = useRouter();
  const { category, q } = router.query;

  console.log(category, q);

  const Ads = category
    ? `/ads?populate=*?filters${category}[name][$eq]=${category}&filters[title][$contains]=
    ${q}&filters[description][$contains]=${q}`
    : "/ads?populate=*";

  const { data: ads, error } = useSWR(Ads, getData);

  if (!ads) return <Loader />;
  if (error) return <div>Something went wrong.</div>;

  return (
    <>
      <h1 className=" mb-10 text-[24px] font-bold  text-[#3e4153];">
        {category}
      </h1>
      {ads?.length > 0 && (
        <div className="flex flex-rov items-center justify-start gap-8">
          {ads?.map((ad) => {
            const adName = ad.attributes.title;
            const adId = ad.id;
            const price = ad.attributes.price;
            const adCoverImg = ad.attributes.coverImg;
            const imgLink = BASE_BE_URL + adCoverImg;
            const adLink = "/ads/" + adId;
            const adDescription = ad.attributes.description;
            const adCity = ad.attributes.address.data.attributes.locality;
            const adStamp = ad.attributes.createdAt.slice(0, -1);
            const adDateTime = adStamp?.split("T");
            const adCreatedAtAgo = timeAgo(
              new Date(`${adDateTime[0]} ${adDateTime[1]}`)
            );
            return (
              <SearchAdCard
                adLink={adLink}
                key={adId}
                title={adName}
                imgLink={imgLink}
                price={price}
                description={adDescription}
                city={adCity}
                timeAgo={adCreatedAtAgo}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
