import Image from "next/image";
import { useRouter } from "next/router";
import { timeAgo } from "../../utils/timeAgo";
import Loader from "../../components/PageParts/Loader";
import Error from "../../components/PageParts/Error";
import { useQuery } from "@apollo/client";
import { AD_Q } from "../../graphql/queries/AD_Q";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function Product() {
  const router = useRouter();
  const { adId } = router.query;

  const {
    data: adData,
    error,
    loading,
  } = useQuery(AD_Q, {
    variables: {
      adId: adId,
    },
  });

  const [src, setSrc] = useState(null);

  useEffect(() => {
    if (adData) {
      setSrc(adData.ad.coverImg?.url);
    }
  }, [adData]);

  if (loading) return <Loader />;
  if (error) {
    console.log(error);
    return <Error/>;
  };

  const adDateTime = adData.ad.createdAt;
  const adCreatedAtAgo = timeAgo(new Date(adDateTime));

  const userStamp = adData.ad.seller?.user.createdAt;
  const adSellerCreatedAtAgo = timeAgo(new Date(userStamp));

  const title = adData.ad.title;
  const price = adData.ad.price;
  const description = adData.ad.description;
  const address = adData.ad.address;
  const sellerName = adData.ad.seller?.user.name;
  const sellerPhone = adData.ad.seller?.user.phone;
  
  return (
    <>
      <main className="container max-w-[1140px] mx-auto px-4 py-5 flex flex-nowrap justify-between ">
        <article className="w-full">
          <section className="flex justify-between items-start xl:flex-wrap ">
            <div>
              <h1 className="text-[24px] font-bold  text-[#273169] ">
                {title}
              </h1>
              <span className="text-[24px] text-[#37a864] mb-2">
                $ {price}
              </span>
            </div>
              <div className="flex justify-center items-center mb-5 xl:mt-6">
                <svg
                  className="h-10 w-10 mr-3 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
                </svg>

                <div className="flex flex-col w-80">
                <span className="text-lg font-bold text-gray-800">
                    {address}
                  </span>

                  <span className="text-gray-600 text-lg">
                    Posted about {adCreatedAtAgo}
                  </span>
                </div>
              </div>
          </section>
          <section className="w-full">
            <div className="flex justify-between items-center w-full ">
              <div className="w-[700px] h-[445px]">
                {src && (
                  <Image
                    src={src}
                    alt="Picture of the product"
                    width={700}
                    height={445}
                    className=" w-[700px] h-[445px] object-cover rounded-lg shadow-[0_1px_2px_0_rgb(0_0_0_/_10%)]"
                  />
                )}
              </div>
              <aside className="w-96 min-w-96 flex ml-8 flex-col justify-start items-start ">
                <div className="flex w-full  flex-col justify-center items-center rounded bg-white shadow-[0_1px_2px_0_rgb(0_0_0_/_10%)] mb-5 px-5 py-[25px]">
                  <h3 className="box-border text-[18px] text-indigo-900 text-base relative text-center font-medium px-[20px]  mb-5 ;">
                    Contact {sellerName}
                  </h3>

                  <form action="submit" name="contactTo">
                    <textarea
                      placeholder="Hi, I am interested! Please contact me if this is still available."
                      name="message"
                      className=" h-[120px] resize-none py-5 px-3 border-[1px] rounded border-solid  text-[#8e909b] mb-5  text-base min-w-0 w-full"
                    ></textarea>
                    
                    <button
                      type="submit"
                      className="text-white py-2 w-[100%] bg-[#3e4153] rounded"
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
                    <Image
                      src={adData.ad.seller?.avatar.url}
                      alt="Profile picture"
                      width={40}
                      height={40}
                    />
                    <span>{sellerName}</span>
                  </Link>

                  <span>{sellerPhone}</span>

                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col justify-center items-center  w-full">
                      <span className="text-base font-normal leading-6 text-center whitespace-nowrap ">
                        1 day
                      </span>
                      <span className="text-xs font-normal leading-4 text-gray-600 text-center whitespace-nowrap">
                        avg reply
                      </span>
                    </div>

                    <div className="flex flex-col justify-center items-center  border-[#eee] border-l-2 w-full">
                      <span className="text-base font-normal leading-6 text-center whitespace-nowrap">
                        77%
                      </span>
                      <span className="text-xs font-normal leading-4 text-gray-600 text-center whitespace-nowrap">
                        reply rate
                      </span>
                    </div>

                    <div className="flex flex-col justify-center items-center  border-[#eee] border-l-2 w-full">
                      <span className="text-base font-normal leading-6 text-center whitespace-nowrap">
                        {adSellerCreatedAtAgo}
                      </span>
                      <span className="text-xs font-normal leading-4 text-gray-600 text-center whitespace-nowrap">
                        on Kijiji
                      </span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            <div className="flex gap-7 w-full overflow-x-auto py-4 overflow-auto ">
              <Image
                src={adData.ad.coverImg?.url}
                alt="Picture of the product"
                width={150}
                height={100}
                onClick={() => setSrc(adData.ad.coverImg.url)}
                className="cursor-pointer w-[150px] h-[100px] object-cover"
              />
              {adData.ad.images.map((image) => (
                <Image
                  key={image.file?.id}
                  src={image.file?.url}
                  alt="Picture of the product"
                  width={150}
                  height={100}
                  onClick={() => setSrc(image.file.url)}
                  className="cursor-pointer w-[150px] h-[100px] object-cover "
                />
              ))}
            </div>
          </section>
          <section className="w-[700px]">
            <h2 className=" text-xl font-normal leading-[26px] text-[#373373] mt-0 mb-5 mx-0">
              Description
            </h2>

            <p className="w-[100%] card_description">{description}</p>

            <span>{adData.ad.views}</span>
          </section>
        </article>
      </main>
    </>
  );
}
