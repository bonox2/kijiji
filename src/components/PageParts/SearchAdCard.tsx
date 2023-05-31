import Image from "next/image";
import Link from "next/link";

export default function SearchAdCard({
  adLink,
  imgLink,
  title,
  price,
  description,
  // timeAgo,
  city
}) {
  
  
 
  return (
    <section className=" bg-white hover:drop-shadow  w-[880px] rounded-md mb-6">
      <Link href={adLink}>
        <div className="flex py-5 px-6 ">
          <Image
            src={imgLink}
            alt="Picture of the product"
            width={200}
            height={160}
            className="w-[200px] h-[160px]"
          />

          <div className="flex flex-col justify-start items-start w-full   ml-6">
             <div className="flex justify-between items-center  w-full  mb-1">
              <h4 className=" line-clamp-2 truncate w-[50ch] text-indigo-900 text-base hover:underline cursor-pointer">{title}</h4>
              <span className="text-[#37a864] text-xl font-bold">${price}</span>
             </div>

            <div className="text-gray-600 text-sm flex justify-center items-center mb-1">
              <span >{city}</span>
              {/* <span className=" ml-2 pl-2">${timeAgo}</span> */}
            </div>

            <div>
              <span className="card_description ">{description}</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
