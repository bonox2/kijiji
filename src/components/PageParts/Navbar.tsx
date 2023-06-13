import React, { useState } from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { CATEGORIES_Q } from '../../graphql/queries/CATEGORIES_Q';



export default function Navbar() {
  console.log('Navbar');
  const { data, error } = useQuery(CATEGORIES_Q);

  const categories = data?.categories || [];

  return (
    <section className="bg-white drop-shadow-sm">
      <nav className="container mx-auto px-4  relative max-w-[1140px]  ">
        <ul className=" flex justify-start gap-6">
          {categories.map((category) => {
            const { id, name, subcategories } = category;

            return (
              <li
                className="text-center w-32 py-4 font-medium text-[#373373] border-b-transparent border-b-4
           hover:cursor-pointer hover:border-b-4 hover:border-[#37a864] 
           box-border relative group"
                key={id}>
                <Link href={`/ads?category=${name}`} className='w-full h-full'>
                  {name.replace('and', '&')}
                </Link>
                {subcategories.length > 0 && (
                  <ul className="absolute top-full left-0 border invisible group-hover:visible">
                    {subcategories.map((subcategory) => {
                      const { id, name } = subcategory;

                      return (
                        <li
                          className=" w-32 py-2 font-medium text-[#373373] border-b-transparent border-b-4
            hover:cursor-pointer hover:border-b-4 hover:border-[#37a864]
            box-border whitespace-nowrap bg-white"
                          key={id}>
                          <Link href={`/ads?subcategory=${name}`} className='w-full h-full'>{name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
