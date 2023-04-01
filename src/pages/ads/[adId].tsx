import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { getData } from "../../services/api";
import { timeAgo } from "../../utils/timeAgo"

export default function Product() {
  const router = useRouter();
  const { adId } = router.query;

  const { data: adData, error } = useSWR(`/ads/${adId}?populate=*`, getData);

  const BASE_URL = 'http://localhost:1337';

  const adStamp = adData?.attributes.createdAt.slice(0, -1);;
  const adDateTime = adStamp?.split("T");

  const userStamp = adData?.attributes.seller.data.attributes.createdAt.slice(0, -1);;
  const userDateTime = userStamp?.split("T");


  
  return (
    <main className="container mx-auto py-[20px] flex flex-nowrap justify-between ">
      <article className="w-[500px];">
        <section className="flex justify-center items-start flex-col">
          <h1 className="text-[24px] font-bold  text-[#3e4153] my-0;">
            {adData?.attributes.title}
          </h1>
          <span className="text-[24px] text-[#37a864] ;">
            $ {adData?.attributes.price}
          </span>
        </section>
        <section>
          <Image
          src="/public/logo.png"
            // src={`${BASE_URL}${adData?.attributes.coverImg.data.attributes.url}`}
            alt="Picture of the author"
            width={700}
            height={445}
          />
        </section>
        <section className="w-[700px]">
          <h2 className=" text-xl font-normal leading-[26px] text-[#373373] mt-0 mb-5 mx-0">
            Description
          </h2>
          <p className="w-[100%]">{adData?.attributes.description}</p>
          <span>{adData?.attributes.views}</span>
        </section>
      </article>
      <aside className="w-[100%] flex ml-8 flex-col justify-start items-start">
        <span>{timeAgo(new Date(`${adDateTime?.[0]} ${adDateTime?.[1]}`))}
          </span>
        <span>Location: {adData?.attributes.address.data.attributes.addressLine1}</span>
        <div className=" flex flex-col justify-center items-center rounded bg-white shadow-[0_1px_2px_0_rgb(0_0_0_/_10%)] mb-5 px-5 py-[25px]">
          <h3 className="box-border text-[18px] text-indigo-900 text-base relative text-center font-medium px-[20px]  mb-5 ;">
            Contact {adData?.attributes.seller.data.attributes.firstName}
          </h3>
          <form action="submit" name="contactTo">
            <textarea
            placeholder="Hi, I am interested! Please contact me if this is still available."
              name="message"
              className=" py-5 px-3 border-[1px] rounded border-solid  text-[#8e909b] mb-5  text-base min-w-0 w-full"
            >
              
            </textarea>
            <button
              type="submit"
              className="text-white py-2 w-[100%] bg-[#3e4153] rounded"
            >
              Send message
            </button>
          </form>
        </div>
        <div>
          <span>{adData?.attributes.seller.data.attributes.firstName}</span>
          <div>
            <div>{timeAgo(new Date(`${userDateTime?.[0]} ${userDateTime?.[1]}`))}</div>
          </div>
        </div>
      </aside>
    </main>
  );
}
