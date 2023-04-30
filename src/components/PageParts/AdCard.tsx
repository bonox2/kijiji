import Image from 'next/image';
import Link from 'next/link';

export default function AdCard({ adLink,imgLink,title,price }) {
  return (
    <article className=" bg-white hover:drop-shadow w-52 rounded-md">
      <Link href={adLink}>
        <Image
          src={imgLink}
          alt="Picture of the product"
          width={205}
          height={150}
        />
        <div className="p-4">
          <h4 className=" line-clamp-2 truncate mb-4">{title}</h4>
          <div>
            <span className="text-[#37a864]">${price}</span>
            {/* icon */}
          </div>
        </div>
      </Link>
    </article>
  );
}
