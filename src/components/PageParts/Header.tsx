import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import SearchBar from './SearchBar';

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
          <div className="flex flex-nowrap justify-center items-center ">
            <Link
              href="/login"
              className="text-[#2681db] font-bold transition-colors ease-linear duration-200 underline hover:text-[#373373]">
              Sign in
            </Link>
            <span className="mx-2"> or </span>
            <Link
              href="/reg"
              className="text-[#2681db] font-bold mr-6 transition-colors ease-linear duration-200 underline hover:text-[#373373]">
              Register
            </Link>
            <Image src="/" alt='profile picture' width={40} height={40} className='w-10 h-10 rounded-full overflow-hidden mr-6'/>
            <Link
              href="/postAd"
              className="text-white font-bold transition-colors ease-linear duration-200 px-4 py-3 rounded shadow-2xl   bg-[#373373] hover:bg-[#4a4675]">
              Post ad
            </Link>
          </div>
        </div>
        
      </header>
    </>
  );
}
