import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";
import { getCategories } from "../../services/api";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const { data: categoriesData, error } = useSWR("/categories", getCategories);
  const { data: subCategoriesData } = useSWR("/subcategories", getCategories);

  const categoryNames = categoriesData?.map(
    (categoryData) => categoryData.attributes.name
  );
  const subCategoryNames = subCategoriesData?.map(
    (subCategoryData) => subCategoryData.attributes.name
  );

  const [menuList, setMenuList] = useState(false);
  return (
    <nav className="container mx-auto">
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
              <ul className="flex flex-col">
                {subCategoryNames?.map((subCategoryName) => (
                  <li key={subCategoryName}>{subCategoryName}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
