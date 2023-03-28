

import useSWR from "swr";
import { getCategories } from "../../services/api";

export default function NavList() {
    
  const { data: subCategoriesData } = useSWR("/subcategories", getCategories);
  
  const subCategoryNames = subCategoriesData?.map(
    (subCategoryData) => subCategoryData.attributes.name
  );

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
}
