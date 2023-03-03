import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { getCategories } from '../../services/api';

export default function Header() {
  const { data, error } = useSWR('/categories', getCategories);

  useEffect(() => {
    console.log({data});
  }, [data])
  
  return (
    <header>
      <div className="container ml-auto mr-auto flex justify-between items-center flex-row">
        <div>
          <Image src="/logo.png" alt="Logo" width={65} height={35} />
        </div>
        <div className="text-sm  ">
          <form className="flex justify-center items-center flex-row flex-nowrap w-min ">
                <input type="text" placeholder="What are you looking for?" className='border-0 rounded
                 border-gray-300 border-style: solid;'/>
                <div className="whitespace-nowrap flex wrap-nowrap transition-all duration-3000 bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white text-intherit  py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  <button>All categories</button>
                </div>
                <button type="submit" className='border-0 rounded border-gray-300 border-style: solid; ' >Search</button>
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
