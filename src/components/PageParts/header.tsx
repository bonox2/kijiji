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
        <div className="logo">
          <Image src="/logo.png" alt="Logo" width={65} height={35} />
        </div>
        <div className="search_bar_wrapper">
          <div className="search_bar">
            <form className="">
              <input type="text" placeholder="What are you looking for?" />
              <div className="categories">
                <button>All categories</button>
              </div>
              <button type="submit"></button>
            </form>
          </div>
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
