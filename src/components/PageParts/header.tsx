import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { getCategories } from "../../services/api";

export default function Header() {
  const { data: categoriesData, error } = useSWR("/categories", getCategories);

  const categoryNames = categoriesData?.map(
    (categoryData) => categoryData.attributes.name
  );

  return (
    <article>
      <header className="bg-white   ">
        <div className=" container mx-auto py-5 flex justify-between items-center flex-row">
          <div>
            <Link href="/add">
              <Image src="/logo.png" alt="Logo" width={65} height={35} />
            </Link>
          </div>
          <div className="text-sm  ">
            <form className="flex justify-center items-center  flex-nowrap w-min text-gray-400">
              <div className="whitespace-nowrap flex text-center justify-center items-center  transition-all duration-3000 bg-transparent  text-intherit  py-3 px-5 border border-r-0 rounded-l ">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="flex text-center  pr-3"
                />
                <button className="whitespace-nowrap  bg-transparent text-intherit border-l flex text-center pl-3">
                  All categories
                </button>
                <ul>
                  {categoryNames?.map((categoryName) => (
                    <li key={categoryName}>{categoryName}</li>
                  ))}
                </ul>
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
            <span> or </span>
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
    </article>
  );
}
