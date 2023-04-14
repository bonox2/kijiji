import React, { useState } from 'react';
import useSWR from 'swr';
import { getData } from '../../services/api';
import Link from 'next/link';

const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/about' },
  { text: 'Contact', href: '/contact' }
];
export default function Navbar() {
  const { data: categoriesData, error } = useSWR(
    '/categories?populate=*',
    getData
  );

  return (
    <section className="bg-white drop-shadow-sm">
      <nav className="container mx-auto relative  ">
        <ul className=" flex justify-start gap-6">
          {categoriesData?.map((categoryData) => {
            const categoryName = categoryData.attributes.name;
            const categoryId = categoryData.id;
            const subcategories = categoryData.attributes.subcategories.data;

            return (
              <li
                className="text-center w-32 py-4 font-medium text-[#373373] border-b-transparent border-b-4
           hover:cursor-pointer hover:border-b-4 hover:border-[#37a864] 
           box-border relative group"
                key={categoryId}>
                <Link href={`/ads?category=${categoryName}`}>
                  {categoryName.replace('and', '&')}
                </Link>
                {subcategories.length > 0 && (
                  <ul className="absolute left-0 border invisible group-hover:visible top-[110%]">
                    {subcategories.map((subcategory) => {
                      const subcategoryName = subcategory.attributes.name;
                      const subcategoryId = subcategory.id;
                      return (
                        <li
                          className=" w-32 py-2 font-medium text-[#373373] border-b-transparent border-b-4
            hover:cursor-pointer hover:border-b-4 hover:border-[#37a864]
            box-border whitespace-nowrap bg-white  border-b-gray-300 "
                          key={subcategoryId}>
                          <Link href={`/ads?subcategory=${subcategoryName}`} className=''>
                            {subcategoryName}
                          </Link>
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
