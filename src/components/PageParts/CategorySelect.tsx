import { POST_CATEGORIES_Q } from '../../graphql/queries/POST_CATEGORIES_Q';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

export default function PostAdSuccess( filterValue) {
    
  const { data, error, loading } = useQuery(POST_CATEGORIES_Q);

  const [selectedCategory, setSelectedCategory] = useState("");
//   const categoryNames = filterValue;
  const categoryNames = data?.subcategories || [];

    return(
        <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              name="category"
              className="input_outline" 
            >
              {categoryNames.map((categoryName) => {
                const { id,name } = categoryName;
                return (
                  <option key={id} value={id}>
                    {name}
                  </option>
                );
              })}
            </select>
    )
}