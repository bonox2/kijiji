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
    <article className=" bg-white hover:drop-shadow w-[950px] rounded-md">
      <Link href={adLink}>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={imgLink}
            alt="Picture of the product"
            className="w-52 h-36"
            width={52}
            height={36}
          />

          <div className="flex flex-col justify-center items-start">
             <div className="flex justify-between items-center ">
              <h4 className=" line-clamp-2 truncate text-indigo-900 text-base hover:underline cursor-pointer">{title}</h4>
              <span className="text-[#37a864] text-xl font-bold">{price}</span>
             </div>

            <div className="text-gray-600 text-sm flex justify-center items-center gap-3">
              <span className="text-inherit">{city}</span>
              {/* <span className="text-inherit ">${timeAgo}</span> */}
            </div>

            <div>
              <span className="">{description}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
