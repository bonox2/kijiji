import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { getCategories } from "../../services/api";

export default function Header() {
  const { data, error } = useSWR("/categories", getCategories);

  useEffect(() => {
    console.log({ data });
  }, [data]);

  return (
    <header>
      <div className="container ml-auto mr-auto flex justify-between items-center flex-row pt-3.5">
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
                <button className="whitespace-nowrap  bg-transparent text-intherit border-l flex text-center pl-3">All categories</button>
             
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
          <Link href="/">Sign in</Link>
          <span> or </span>
          <Link href="/">Register</Link>
        </div>
      </div>
      <nav>
        <div className="container">
          <ul>
            <li>Cars & Vehicle</li>
            <li>Real Estate</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
