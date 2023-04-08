import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { getData } from "../../services/api";
import { useRouter } from "next/router";
import Loader from "../../components/PageParts/Loader";

export default function Header() {
  const router = useRouter();
  const { data: categoriesData, error } = useSWR("/categories", getData);
  if (!categoriesData) return <Loader />;
  if (error) return <div>Something went wrong.</div>;

  const categoryNames = categoriesData?.map(
    (categoryData) => categoryData.attributes.name
  );
  
  
  const filterSearch = ({
    category
  }) => {
    const { query } = router;
    if (category) query.category = category;

    router.push({
      pathname: router.pathname,
      query: query,
    });
  };
  const categoryHandler = (e) => {
    filterSearch({ category: e.target.value });
  };

  return (
    <>
      <header className="bg-white">
        <div className="container mx-auto py-5 flex justify-between items-center flex-row">
          <Link href="/">
            <div className="hover:cursor-pointer flex justify-center items-center">
              <Image src="/logo.png" alt="Company logo" width={65} height={0} />
            </div>
          </Link>
          <div className="text-sm  ">
            <form className="flex justify-center items-center  flex-nowrap w-min text-gray-400">
              <div className="whitespace-nowrap flex text-center justify-center items-center  transition-all duration-3000 bg-transparent text-inherit  py-3 px-5 border border-r-0 rounded-l ">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="flex text-center  pr-3"
                />
                {/* <select defaultValue="All categories">
                <option key="All categories">All categories</option>
                  {categoryNames?.map((categoryName) => (
                    <option key={categoryName}>{categoryName}</option>
                  ))}
                </select> */}
                <select
                  value="category"
                  onChange={categoryHandler}
                >
                  <option value="all">All</option>
                  {
                    categoryNames.map((categoryName) => (
                      <option key={categoryName} value={categoryName}>
                        {categoryName}
                      </option>
                    ))}
                </select>
              </div>
              <button
                type="submit"
                className="whitespace-nowrap flex justify-center direction-col text-center  transition-all duration-3000 bg-transparent text-[#373373] hover:bg-[#373373] font-semibold hover:text-white text-inherit py-3 px-8 border hover:border-transparent rounded "
              >
                Search
              </button>
            </form>
          </div>
          <div>
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
