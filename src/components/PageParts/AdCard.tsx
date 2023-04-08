import Image from "next/image";
import Link from "next/link";


export default function AdCard(props) {
  return (
    <article className=" bg-white hover:drop-shadow w-52 rounded-md">
      <Link href={props.adLink} >
        <Image
          src='http://localhost:1337/uploads/protection_861bab617d.jpg'
          alt="Picture of the product"
          width={205}
          height={150}
        />
        <div className="p-4">
        <h4 className=" line-clamp-2 truncate mb-4">{props.title}</h4>
        <div>
        <span className="text-[#37a864]">${props.price}</span>
        {/* icon */}
        </div>
        </div>
      </Link>
    </article>
  );
}
