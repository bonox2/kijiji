import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { getData} from '../../services/api';

export default function Header() {
  const { data: categoriesData, error } = useSWR('/categories', getData);

  const categoryNames = categoriesData?.map(
    (categoryData) => categoryData.attributes.name
  );

  return (
    <>
      <header className="bg-white drop-shadow-md  ">
        <div className="container mx-auto py-5 flex justify-between items-center flex-row">
          <div>
            <Image src="/logo.png" alt="Logo" width={65} height={0} />
          </div>
          <div className="text-sm  ">
            <form className="flex justify-center items-center  flex-nowrap w-min text-gray-400">
              <div className="whitespace-nowrap flex text-center justify-center items-center  transition-all duration-3000 bg-transparent text-inherit  py-3 px-5 border border-r-0 rounded-l ">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="flex text-center  pr-3"
                />
                <select defaultValue="All categories">
                  {categoryNames?.map((categoryName) => (
                    <option key={categoryName}>{categoryName}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="whitespace-nowrap flex justify-center direction-col text-center  transition-all duration-3000 bg-transparent text-[#373373] hover:bg-[#373373] font-semibold hover:text-white text-inherit py-3 px-8 border hover:border-transparent rounded ">
                Search
              </button>
            </form>
          </div>
          <div className="headerButtons">
            <Link
              href="/"
              className="text-[#2681db] font-bold transition-colors ease-linear duration-200 underline hover:text-[#373373]">
              Sign in
            </Link>
            <span className="mx-2"> or </span>
            <Link
              href="/"
              className="text-[#2681db] font-bold transition-colors ease-linear duration-200 underline hover:text-[#373373]">
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
