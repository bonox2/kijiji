import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { AD_Q } from '../../graphql/queries/AD_Q';
import { useQuery } from "@apollo/client";

export default function PhotoSlider(){
  const router = useRouter();
  const { adId } = router.query;

  
  const {data: adData,error,loading,} = useQuery(AD_Q, {
    variables: {
      adId: adId,
    },
  })
  return(
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      ></Swiper>{ad.coverImg.length > 0 && (
          {ads?.map((ad) => {
            const adName = ad.title;
            const adId = ad.id;
            const price = ad.price;
            const adCoverImg = ad.coverImg.url;
            const adLink = '/ads/' + adId;
            const adDescription = ad.description;
            const adCity = ad.address.locality;
            // const adStamp = ad.createdAt.slice(0, -1);
            // const adDateTime = adStamp?.split("T");
            // const adCreatedAtAgo = timeAgo(
            //   new Date(`${adDateTime[0]} ${adDateTime[1]}`)
            // );
            return (
              <SwiperSlide>
              <Image src="https://swiperjs.com/demos/images/nature-1.jpg" alt="picture" width="100" height="100"/>
            </SwiperSlide>
            )
          })}
      )}
      
    </>
  )}