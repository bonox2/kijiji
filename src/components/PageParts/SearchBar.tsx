import Loader from "./Loader";
import { getData } from "../../services/api";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { CATEGORIES_Q } from "../../graphql/queries/CATEGORIES_Q";
import { useState, useEffect } from "react";

export default function SearchBar() {
  const router = useRouter();
  const { query } = router;
  const { category, q } = query;

  const [queryValue, setQueryValue] = useState(q || "");
  const [selectedCategory, setSelectedCategory] = useState(category || "all");

  useEffect(() => {
    if (category) {
      //@ts-ignore
      setSelectedCategory(category);
    }
    if (q) {
      //@ts-ignore
      setQueryValue(q);
    }
  }, [category, q]);

  const { data, error, loading } = useQuery(CATEGORIES_Q);

  if (loading) return <Loader />;
  if (error) return <div>Something went wrong.</div>;

  const categoryNames = data.categories || [];

  const filterSearch = (e) => {
    e.preventDefault();

    router.push({
      pathname: "/search",
      query: {
        category: selectedCategory,
        q: queryValue,
      },
    });
  };

  return (
    <div className=" w-full text-sm mx-6 xl:order-3 xl:mx-0 xl:mt-7">
      <form
        className="flex justify-center items-center  flex-nowrap w-full whitespace-nowrap text-center  transition-all 
        duration-3000 bg-transparent text-inherit  border text-[#3e4153] border-r-0 rounded-l md:border-r-[1px] 
        md:rounded lg:flex-wrap lg:flex-col lg:items-start lg:justify-start lg:border-none"
        onSubmit={filterSearch}>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex text-start  py-3 px-5 min-w-[150px] w-full text-[#3e4153] lg:border-[1px] lg:rounded
            lg:drop-shadow"
            name="q"
            value={queryValue}
            onChange={(e) => setQueryValue(e.target.value)}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            name="category"
            className="py-3 px-5 w-48  border-l-[1px] border-height-50 lg:w-full lg:border-[1px] lg:rounded lg:my-5 
            lg:drop-shadow"
          >
            <option value="all">All categories</option>
            {categoryNames.map((categoryName) => {
              const { name } = categoryName;
              return (
                <option key={name} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
          
        <button
          type="submit"
          className="w-32  whitespace-nowrap flex justify-center direction-col text-center  transition-all duration-3000 
          bg-transparent text-[#373373] hover:bg-[#373373] font-semibold hover:text-white text-inherit py-3 px-8 border 
          hover:border-transparent rounded lg:w-full lg:border-[1px] lg:rounded lg:drop-shadow-sm"
        >
          Search
        </button>
      </form>
    </div>
  );
}
