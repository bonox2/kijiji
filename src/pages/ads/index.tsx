//Sucategory page with rendered products
import useSWR from "swr";
import { getData } from "../../services/api";

export default function NavList() {
    
  const { data: ads } = useSWR("/ads", getData);
  
  return (
    <li
              className="mr-12 py-6 font-medium text-[#373373] border-b-transparent border-b-4
           hover:cursor-pointer hover:border-b-4 hover:border-[#37a864] 
           box-border relative group">
              {ads.length > 0 && (
                <ul className="absolute top-full left-0 border invisible group-hover:visible">
                  {ads.map((ad) => {
                    const adName = ad.attributes.name;
                    const adId = ad.id;
                    return (
                      <li
                        className="mr-12 py-6 font-medium text-[#373373] border-b-transparent border-b-4
            hover:cursor-pointer hover:border-b-4 hover:border-[#37a864]
            box-border whitespace-nowrap"
                        key={adId}>
                        {adName}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
  );
}