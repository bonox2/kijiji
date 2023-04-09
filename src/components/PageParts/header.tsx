import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { getData } from '../../services/api';
import { useRouter } from 'next/router';
import Loader from './Loader';
import SearchBar from '../SearchBar';

export default function Header() {

  

  return (
    <>
      <header className="bg-white">
        <div className="container mx-auto py-5 flex justify-between items-center flex-row">
          <Link href="/">
            <div className="hover:cursor-pointer flex justify-center items-center">
              <Image src="/logo.png" alt="Company logo" width={65} height={0} />
            </div>
          </Link>
          <SearchBar/>
          <div>
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
