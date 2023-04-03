import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { getData } from '../../services/api';
import { timeAgo } from '../../utils/timeAgo';
import { BASE_BE_URL } from '../../../constants';

export default function Product() {
  const router = useRouter();
  const { adId } = router.query;

  const { data: adData, error } = useSWR(`/ads/${adId}?populate=*`, getData);

  if (!adData) return <div>Loading...</div>;

  if (error) return <div>Something went wrong.</div>;

  const adStamp = adData.attributes.createdAt.slice(0, -1);
  const adDateTime = adStamp?.split('T');

  const userStamp = adData.attributes.seller.data.attributes.createdAt.slice(
    0,
    -1
  );
  const userDateTime = userStamp?.split('T');

  const adTitle = adData.attributes.title;
  const adPrice = adData.attributes.price;
  const adDescription = adData.attributes.description;
  const adViews = adData.attributes.views;
  

  const adCoverImg = adData.attributes.coverImg.data.attributes.url;
  const adCreatedAtAgo = timeAgo(new Date(`${adDateTime[0]} ${adDateTime[1]}`));

  const adSellerName = adData.attributes.seller.data.attributes.firstName;
  const adSellerEmail = adData.attributes.seller.data.attributes.email;
  const adSellerPhone = adData.attributes.seller.data.attributes.phone;
  const adSellerCreatedAtAgo = timeAgo(new Date(`${userDateTime?.[0]} ${userDateTime?.[1]}`));

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
          <h1 className="text-[24px] font-bold  text-[#3e4153] my-0;">
            {adTitle}
          </h1>

          <span className="text-[24px] text-[#37a864] ;">$ {adPrice}</span>
        </section>
        <section>
          <Image
            src={imgLink}
            alt="Picture of the product"
            width={700}
            height={445}
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
      <aside className="w-[100%] flex ml-8 flex-col justify-start items-start">
        <span>{adCreatedAtAgo}</span>

        <span>
          Location: {adAddress}
        </span>

        <div className="flex flex-col justify-center items-center rounded bg-white shadow-[0_1px_2px_0_rgb(0_0_0_/_10%)] mb-5 px-5 py-[25px]">
          <h3 className="box-border text-[18px] text-indigo-900 text-base relative text-center font-medium px-[20px]  mb-5 ;">
            Contact {adSellerName}
          </h3>

          <form action="submit" name="contactTo">
            <textarea
              placeholder="Hi, I am interested! Please contact me if this is still available."
              name="message"
              className=" py-5 px-3 border-[1px] rounded border-solid  text-[#8e909b] mb-5  text-base min-w-0 w-full"></textarea>
            <button
              type="submit"
              className="text-white py-2 w-[100%] bg-[#3e4153] rounded">
              Send message
            </button>
          </form>
        </div>
        <div>
          <span>{adSellerName}</span>

          <div>
            <div>
              {adSellerCreatedAtAgo}
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}
