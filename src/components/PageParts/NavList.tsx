

import useSWR from "swr";
import { getCategories } from "../../services/api";

export default function NavList() {
    
  const { data: subCategoriesData } = useSWR("/subcategories", getCategories);
  
  const subCategoryNames = subCategoriesData?.map(
    (subCategoryData) => subCategoryData.attributes.name
  );

  return (
  );
}
