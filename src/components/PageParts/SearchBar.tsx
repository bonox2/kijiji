import Loader from './Loader';
import { getData } from '../../services/api';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { CATEGORIES_Q } from '../../graphql/queries/CATEGORIES_Q';
import { useState, useEffect } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const { query } = router;
  const { category, q } = query;

  const [queryValue, setQueryValue] = useState(q || '');
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');

  
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
      pathname: '/search',
      query: {
        category: selectedCategory,
        q: queryValue
      }
    });
  };

  return (
    <div className="text-sm  ">
      <form
        className="flex justify-center items-center  flex-nowrap w-min text-gray-400"
        onSubmit={filterSearch}>
        <div className="whitespace-nowrap flex text-center justify-center items-center  transition-all duration-3000 bg-transparent text-inherit  py-3 px-5 border border-r-0 rounded-l ">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex text-center  pr-3"
            name="q"
            value={queryValue}
            onChange={(e) => setQueryValue(e.target.value)}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            name="category">
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
        </div>
        <button
          type="submit"
          className="whitespace-nowrap flex justify-center direction-col text-center  transition-all duration-3000 bg-transparent text-[#373373] hover:bg-[#373373] font-semibold hover:text-white text-inherit py-3 px-8 border hover:border-transparent rounded ">
          Search
        </button>
      </form>
    </div>
  );
}
