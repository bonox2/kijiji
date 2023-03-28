import React, { useState } from 'react';
import useSWR from 'swr';
import { getData } from '../../services/api';

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
    <nav className="container mx-auto relative">
      <ul className="flex justify-start">
        {categoriesData?.map((categoryData) => {
          const categoryName = categoryData.attributes.name;
          const categoryId = categoryData.id;
          const subcategories = categoryData.attributes.subcategories.data;

          return (
            <li
              className="mr-12 py-6 font-medium text-[#373373] border-b-transparent border-b-4
           hover:cursor-pointer hover:border-b-4 hover:border-[#37a864] 
           box-border relative group"
              key={categoryId}>
              {categoryName}
              {subcategories.length > 0 && (
                <ul className="absolute top-full left-0 border invisible group-hover:visible">
                  {subcategories.map((subcategory) => {
                    const subcategoryName = subcategory.attributes.name;
                    const subcategoryId = subcategory.id;
                    return (
                      <li
                        className="mr-12 py-6 font-medium text-[#373373] border-b-transparent border-b-4
            hover:cursor-pointer hover:border-b-4 hover:border-[#37a864]
            box-border whitespace-nowrap"
                        key={subcategoryId}>
                        {subcategoryName}
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
  );
}
