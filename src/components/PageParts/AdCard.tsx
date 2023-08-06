import Image from "next/image";
import Link from "next/link";

export default function AdCard({ adLink, imgLink, title, price }) {
  return (
    <article className=" bg-white hover:drop-shadow rounded-md mb-8 w-60 xl:w-[30%]
    lg:w-[45%] lg:justify-between md:w-4/5">
      <Link href={adLink}>
        <Image
          src={imgLink}
          alt="Picture of the product"
          width={205}
          height={150}
          className="w-full h-[150px] rounded-t-md"
        />
        <div className="p-4">
          <h4 className=" line-clamp-2 truncate mb-4">{title}</h4>
          <div>
            <span className="text-[#37a864] font-semibold text-xl">
              ${price}
            </span>
            {/* icon */}
          </div>
        </div>
      </Link>
    </article>
  );
}
