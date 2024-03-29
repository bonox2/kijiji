import Link from "next/link";

export default function AccNavbar() {
  return (
    <section className="bg-white drop-shadow-sm ">
      <nav className="container mx-auto px-4 relative max-w-[1140px]  ">
        <ul className=" flex justify-start p-4">
          <li className=" border-r-[1px] border-gray-200 px-6">
            <Link
              href="/account/my-ads/active"
              className="p-4 font-medium text-gray-600 border-b-transparent border-b-4
            hover:cursor-pointer hover:border-b-2 hover:border-b-[#37a864]
            box-border whitespace-nowrap "
            >
              My Ads
            </Link>
          </li>

          <li className="px-6 ">
            <Link
              href="/account/profile/listings"
              className="p-4 font-medium text-gray-600 border-b-transparent border-b-4
            hover:cursor-pointer hover:border-b-2 hover:border-[#37a864]
            box-border whitespace-nowrap "
            >
              My Profile
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
