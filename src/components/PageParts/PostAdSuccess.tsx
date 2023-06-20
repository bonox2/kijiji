import Image from "next/image"
import Link from "next/link"

export default function PostAdSuccess({imgId, imgLink  }) {

  function refreshPage() {
    window.location.reload();
  }

  return (
         <section className="w-full h-screen absolute bg-black/25 top-0 left-0 z-9999 flex items-center justify-center">
          <div className="w-[600px] h-96 bg-white mx-auto ">
          {/* <Image
                key={imgId}
                src={imgLink}               
                alt="Picture of the product"
                width={150}
                height={150}
                onClick={() => setSrc(adData.ad?.coverImg.url)}
                className=" w-[150px] h-[150px] object-cover"
              /> */}

              <div className=" flex w-72 justify-between items-center mx-auto mt-16">
                <Link
                  href="/"
                  className="text-white font-bold whitespace-nowrap transition-colors ease-linear duration-200 px-4 py-3 
                  rounded shadow-lg  bg-[#373373] hover:bg-[#4a4675]"
                  onClick={refreshPage}>
                  Go back
                </Link>
                <Link
                  href="/post-ad"
                  className="text-white font-bold whitespace-nowrap transition-colors ease-linear duration-200 px-4 py-3 
                  rounded shadow-lg  bg-[#373373] hover:bg-[#4a4675]"
                  onClick={refreshPage}>
                  Create new ad
                </Link>
              </div>
          </div>
         </section>
    )
}
