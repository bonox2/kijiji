import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {

  

  return (
    <>
      <header className="bg-white   ">
        <div className="container mx-auto py-5 flex justify-between items-center flex-row">
          <div>
            <Image src="/logo.png" alt="Logo" width={65} height={35} />
          </div>
          <div className="text-sm  ">
            <form className="flex justify-center items-center  flex-nowrap w-min text-gray-400">
              <div className="whitespace-nowrap flex text-center justify-center items-center  transition-all duration-3000 bg-transparent  text-intherit  py-3 px-5 border border-r-0 rounded-l ">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="flex text-center  pr-3"
                />
                <Navbar className="whitespace-nowrap bg-transparent text-intherit border-l flex text-center pl-3" />
                
              </div>
              <button
                type="submit"
                className="whitespace-nowrap flex justify-center direction-col text-center  transition-all duration-3000 bg-transparent text-purple-900 hover:bg-purple-900  font-semibold hover:text-white text-intherit  py-3 px-8 border hover:border-transparent rounded "
              >
                Search
              </button>
            </form>
          </div>
          <div className="headerButtons">
            <Link
              href="/"
              className="text-[#2681db] font-bold transition-colors ease-linear duration-200 underline hover:text-[#373373]"
            >
              Sign in
            </Link>
            <span className="mx-2"> or </span>
            <Link
              href="/"
              className="text-[#2681db] font-bold transition-colors ease-linear duration-200 underline hover:text-[#373373]"
            >
              Register
            </Link>
          </div>
        </div>
        <nav>
          <div className="container"></div>
        </nav>
      </header>
    </>
  );
}
