import Image from "next/image"

export default function PostAdSuccess() {
  


  return (
         <section className="w-full h-screen sticky bg-black/25 top-0 left-0 z-9999 flex items-center justify-center">
          <div className="w-[600px] h-96 bg-white mx-auto ">
          <Image
                // key={id}
                // src={url}                alt="Picture of the product"
                width={150}
                height={150}
                // onClick={() => setSrc(adData.ad?.coverImg.url)}
                className=" w-[150px] h-[150px] object-cover"
              />


          </div>
         </section>
    )
}
