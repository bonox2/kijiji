import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { getData } from "../../services/api";
import { timeAgo } from "../../utils/timeAgo";
import { BASE_BE_URL } from "../../../constants";
import Loader from "../../components/PageParts/Loader";
import Link from "next/link";


export default function Product() {
  const router = useRouter();
  const { adId } = router.query;

  const { data: adData, error } = useSWR(`/ads/${adId}?populate=*`, getData);

  if (!adData) return <Loader />;
  if (error) return <div>Something went wrong.</div>;

  const adStamp = adData.attributes.createdAt.slice(0, -1);
  const adDateTime = adStamp?.split("T");

  const userStamp = adData.attributes.seller.data.attributes.createdAt.slice(
    0,
    -1
  );
  const userDateTime = userStamp?.split("T");

  const adTitle = adData.attributes.title;
  const adPrice = adData.attributes.price;
  const adDescription = adData.attributes.description;
  const adViews = adData.attributes.views;

  const adCoverImg = adData.attributes.coverImg.data.attributes.url;
  const adCreatedAtAgo = timeAgo(new Date(`${adDateTime[0]} ${adDateTime[1]}`));

  const adSellerName = adData.attributes.seller.data.attributes.firstName;
  const adSellerPhone = adData.attributes.seller.data.attributes.phoneNumber;
  // const adSellerAvatar = adData.attributes.seller.data.attributes.avatar;
  const adSellerCreatedAtAgo = timeAgo(
    new Date(`${userDateTime?.[0]} ${userDateTime?.[1]}`)
  );

  const adAddress = adData.attributes.address.data.attributes.addressLine1;
  const adAddressCity = adData.attributes.address.data.attributes.city;
  const adAddressState = adData.attributes.address.data.attributes.state;
  const adAddressZip = adData.attributes.address.data.attributes.zip;
  const adAddressCountry = adData.attributes.address.data.attributes.country;

  const imgLink = BASE_BE_URL + adCoverImg;

  return (
    <main className="container mx-auto py-5 flex flex-nowrap justify-between ">
      <article className="w-[500px];">
        <section className="flex justify-center items-start flex-col">
          <h1 className="text-[24px] font-bold  text-[#3e4153] my-0">
            {adTitle}
          </h1>

          <span className="text-[24px] text-[#37a864] ;">$ {adPrice}</span>
        </section>
        <section>
          {/* <Image
            src={imgLink}
            alt="Picture of the product"
            width={700}
            height={445}
          /> */}
          {/* Temporary suspension of the Image component due to faulty picture display */}
          <img
            src={imgLink}
            alt="Picture of the product"
            className=" w-[700px] h-[445px]"
          />
        </section>
        <section className="w-[700px]">
          <h2 className=" text-xl font-normal leading-[26px] text-[#373373] mt-0 mb-5 mx-0">
            Description
          </h2>

          <p className="w-[100%]">{adDescription}</p>

          <span>{adViews}</span>
        </section>
      </article>
      <aside className=" flex ml-8 flex-col justify-start items-start w-80">
        <div className="flex justify-center items-center mb-5 ">
        <svg className="h-6 w-6 mr-3 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>         
           
           <div className="flex flex-col">
          <span className="text-gray-600 text-sm">Posted about {adCreatedAtAgo} ago</span>

          <span className="text-sm font-bold text-gray-800">{adAddress}</span>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center rounded bg-white shadow-[0_1px_2px_0_rgb(0_0_0_/_10%)] mb-5 px-5 py-[25px]">
          <h3 className="box-border text-[18px] text-indigo-900 text-base relative text-center font-medium px-[20px]  mb-5 ;">
            Contact {adSellerName}
          </h3>

          <form action="submit" name="contactTo">
            <textarea
              placeholder="Hi, I am interested! Please contact me if this is still available."
              name="message"
              className=" py-5 px-3 border-[1px] rounded border-solid 
               text-[#8e909b] mb-5  text-base min-w-0 w-full max-h-80"
            ></textarea>

            <button
              type="submit"
              className="text-white py-2 w-[100%] bg-[#3e4153] rounded "
            >
              Send message
            </button>
          </form>
        </div>
        <div
          className="flex flex-col justify-center items-start rounded 
        bg-white shadow-[0_1px_2px_0_rgb(0_0_0_/_10%)]  px-5 py-5 w-full gap-3"
        >
          <Link
            href="/"
            className="flex justify-center items-center gap-5 text-[#103a56]
          hover:text-[#155e9b] hover:underline font-semibold	rounded-full overflow-hidden"
          >
            <img
              src="http://localhost:1337/uploads/pfp_f9784cb3e1.jpg"
              alt="Profile picture"
              className="
            w-10 h-10 "
            />
            <span>{adSellerName}</span>
          </Link>

          <span>{adSellerPhone}</span>

          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col justify-center items-center  px-4">
              <span className="text-base font-normal leading-6 text-center whitespace-nowrap">
                {" "}
                1 day
              </span>
              <span className="text-xs font-normal leading-4 text-gray-600 text-center">
                avg reply
              </span>
            </div>

            <div className="flex flex-col justify-center items-center  border-[#eee] border-l-2 px-4">
              <span className="text-base font-normal leading-6 text-center whitespace-nowrap">
                77%
              </span>
              <span className="text-xs font-normal leading-4 text-gray-600 text-center">
                reply rate
              </span>
            </div>

            <div className="flex flex-col justify-center items-center  border-[#eee] border-l-2 px-4">
              <span className="text-base font-normal leading-6 text-center whitespace-nowrap">
                {adSellerCreatedAtAgo}
              </span>
              <span className="text-xs font-normal leading-4 text-gray-600 text-center">
                on Kijiji
              </span>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}
