import Image from "next/image";
import Link from "next/link";

export default function SearchAdCard({
  adLink,
  imgLink,
  title,
  price,
  description,
  address,
  adCreatedAt,
}) {

  return (
    <section className=" bg-white hover:drop-shadow  w-full rounded-md mb-6">
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
            <div className="flex justify-center items-start  w-full  mb-1 flex-col">
              <span className="text-[#37a864] text-xl font-bold whitespace-nowrap">${price}</span>
              <h4 className="card_title  text-indigo-900 text-base hover:underline cursor-pointer ">
                {title}
              </h4>
            </div>

            <div className="text-gray-600 text-sm flex justify-center items-center mb-1 lg:flex-col lg:items-start ">
              <span className="pr-3 mr-3 border-r-[1px] border-gray-300 lg:border-none">{address}</span> <span>{adCreatedAt}</span>
            </div>

            <div>
              <span className="card_description lg:hidden">{description}</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
