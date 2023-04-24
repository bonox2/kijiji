import Head from "next/head";
import Navbar from "../components/PageParts/Navbar";
import AdCard from "../components/PageParts/AdCard";
import Link from "next/link";
import { BASE_BE_URL } from "../../constants";
import Loader from "../components/PageParts/Loader";

export default function Home() {
  console.log('Home');

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className="flex justify-center items-center gap-6 my-8 mb-52">
      {/* {adData?.map((ad) => {
        const adName = ad.attributes.title;
        const adId = ad.id;
        const price = ad.attributes.price;
        const adCoverImg = ad.attributes.coverImg.data.attributes.url;
        const imgLink = BASE_BE_URL + adCoverImg;
        console.log(imgLink);
        
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
      })} */}
      </section>
    </>
  );
}
