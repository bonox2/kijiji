import Link from "next/link";
import { useRouter } from "next/router";

import AccNavbar from "./AccNavbar";

export default function MyAds() {
  const router = useRouter();
  const { asPath } = router;

  const activeClassL = asPath.endsWith("/active")
    ? "btn_active"
    : "account_btn";
  const activeClassR = asPath.endsWith("/inactive")
    ? "btn_active"
    : "account_btn";

  return (
    <>
      <AccNavbar />
      <div className="container max-w-[1140px] mx-auto px-4 ">
        <h1 className=" text-2xl font-bold py-7 mb-2 text-[#3e4153]">My Ads</h1>
        <section className="flex justify-between items-center md:flex-col md:items-start md:justify-center">
          <div>
            <Link
              href="/account/my-ads/active"
              className={`${activeClassL} relative border-[1px] text-base font-medium border-gray-300 duration-300
              px-8 py-3 rounded-l bg-white overflow-hidden`}
            >
              Active <span>0</span>
            </Link>
            
            <Link
              href="/account/my-ads/inactive"
              className={`${activeClassR} relative border-[1px] text-base font-medium border-gray-300 border-l-0 duration-300
                    px-8 py-3 rounded-r bg-white overflow-hidden`}
            >
              Inactive <span>0</span>
            </Link>
          </div>

          <input
            type="text"
            className=" rounded  px-6 py-3 border-[1px] border-[#d2d3d7] md:mt-6 md:w-full"
            placeholder="Search..."
          />
        </section>
      </div>
    </>
  );
}
