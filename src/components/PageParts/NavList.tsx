

import useSWR from "swr";
import { getCategories } from "../../services/api";

export default function NavList() {
    
  const { data: subCategoriesData } = useSWR("/categories?populate=*", getCategories);
  
  const subCategoryNames = subCategoriesData?.map(
    (subCategoryData) => subCategoryData.attributes.subcategories.data.id
  );

  return (
    <section className=" absolute top-[100%] bg-white shadow-sm">
      <aside className=" pt-4 pl-4">
      <ul className="flex flex-col">
      {subCategoryNames?.map((subCategoryName) => (
        <li key={subCategoryName}>{subCategoryName}</li>
      ))}
    </ul>
      </aside>
    </section>
  );
}
