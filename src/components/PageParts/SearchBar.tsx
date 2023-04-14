import useSWR from 'swr';
import Loader from './Loader';
import { getData } from '../../services/api';
import { useRouter } from 'next/router';

export default function SearchBar() {
  const router = useRouter();
  const { query } = router;

  const { data: categoriesData, error } = useSWR('/categories', getData);

  if (!categoriesData) return <Loader />;
  if (error) return <div>Something went wrong.</div>;

  const categoryNames = categoriesData?.map(
    (categoryData) => categoryData.attributes.name
  );

  const filterSearch = (e) => {
    e.preventDefault();

    const form = e.target;

    query.category = form.category.value;
    query.q = form.q.value;

    router.push({
      pathname: '/search',
      query: query
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
          />
          <select defaultValue="all" name="category">
            <option value="all">All categories</option>
            {categoryNames.map((categoryName) => (
              <option key={categoryName} value={categoryName}>
                {categoryName}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="whitespace-nowrap flex justify-center direction-col text-center  transition-all duration-3000 bg-transparent text-[#373373] hover:bg-[#373373] font-semibold hover:text-white text-inherit py-3 px-8 border hover:border-transparent rounded ">
          Search1
        </button>
      </form>
    </div>
  );
}
