import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <>
      <header className="bg-white">
        <div className="container max-w-[1140px] mx-auto py-5 px-4 flex justify-between items-center flex-row">
          <Link href="/">
            <div className="hover:cursor-pointer flex justify-center items-center">
              <Image src="/logo.png" alt="Company logo" width={65} height={0} />
            </div>
          </Link>

          <SearchBar/>

          <div className="flex flex-nowrap justify-center items-center ">
            <Link
              href="/login"
              className="text-[#2681db] font-bold transition-colors ease-linear duration-200 underline hover:text-[#373373]"
            >
              Sign in
            </Link>

            <span className="mx-2"> or </span>

            <Link
              href="/reg"
              className="text-[#2681db] font-bold  transition-colors ease-linear duration-200 underline hover:text-[#373373]"
            >
              Register
            </Link>

            <nav
              className="text-center w-10 font-medium text-[#373373] border-b-transparent
             border-b-4 hover:cursor-pointer  relative group z-20 mx-10"
            >
              <Image
                src="/"
                alt="profile picture"
                width={40}
                height={40}
                className="w-10 h-10 
              rounded-full overflow-hidden"
              ></Image>

              <ul
                className="absolute top-full translate-left border invisible group-hover:visible
              flex flex-col"
              >

                <li
                  className=" w-32 py-2 font-medium text-[#373373] border-b-transparent border-b-4
            hover:cursor-pointer hover:border-b-4 hover:border-[#37a864]
            box-border whitespace-nowrap bg-white"
                >
                  <Link href="/account/my-ads/active">My Ads</Link>
                </li>

                <li
                  className=" w-32 py-2 font-medium text-[#373373] border-b-transparent border-b-4
            hover:cursor-pointer hover:border-b-4 hover:border-[#37a864]
            box-border whitespace-nowrap bg-white"
                >
                  <Link href="/account/profile/listings">My Profile</Link>
                </li>
              </ul>
            </nav>

            <Link
              href="/post-ad"
              className="text-white font-bold whitespace-nowrap transition-colors ease-linear duration-200 px-4 py-3 
              rounded shadow-lg  bg-[#373373] hover:bg-[#4a4675]"
            >
              Post ad
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
