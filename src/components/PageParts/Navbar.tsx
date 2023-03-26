
import React, { useState } from "react";
import useSWR from "swr";
import { getCategories } from "../../services/api";
import NavList from "./NavList";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
export default function Navbar () {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const { data: categoriesData, error } = useSWR("/categories?populate=*", getCategories);

  const categoryNames = categoriesData?.map(
    (categoryData) => categoryData.attributes.name
  );
  const categoryId = categoriesData?.map(
    (categoryData) => categoryData.id
  );
  const [menuList, setMenuList] = useState(false);
  return (
    <nav className="container mx-auto relative">
      <ul className="flex justify-start">
        {categoryNames?.map((categoryName) => (
          <li
            onClick={() => setMenuList(!menuList)}
            className="mr-12 py-6 font-medium text-[#373373]
             hover:cursor-pointer hover:border-b-4 hover:border-[#37a864] 
             box-border "
            key={categoryName}
          >
            {categoryName}
            {menuList && (
              <NavList/>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};


