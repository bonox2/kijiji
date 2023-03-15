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

  const categoryNames = categoriesData?.map(
    (categoryData) => categoryData.attributes.name
  );

  return (
    <>
      <ul>
        {categoryNames?.map((categoryName) => (
          <li key={categoryName}>{categoryName}</li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
