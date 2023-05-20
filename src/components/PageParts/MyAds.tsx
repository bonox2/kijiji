import { useEffect, useState } from "react";
import AccNavbar from "./AccNavbar";
import Link from "next/link";

export default function MyAds() {
    const [stateL, setStateL] = useState(true);
    const handleClickL = () => {
      if(stateL == true){

      } else{
        setStateR(current => !current);
        setStateL(current => !current);
      }
        
    };
    let activeClassL = stateL ? "btn_active" : "account_btn";

    const [stateR, setStateR] = useState(false);
    const handleClickR = () => {
      if(stateR == true){
      } else{
        setStateR(current => !current);
        setStateL(current => !current);
      }
    };
    let activeClassR = stateR ? "btn_active" : "account_btn";

    useEffect(() => {
      setStateL(true);
      setStateR(false);
    }, []);


  return (
    <>
      <AccNavbar />
      <div className="container max-w-[1140px] mx-auto ">
        <h1 className=" text-2xl font-bold py-7 mb-2 text-[#3e4153]">My Ads</h1>
        <section className="flex justify-between items-center ">
          <div>
              <Link href="/account/my-ads/active" className={`${activeClassL}  relative border-[1px] text-base font-medium border-gray-300 duration-300
              px-8 py-3 rounded-l bg-white overflow-hidden`}  onClick={handleClickL}>
                Active <span>0</span>
              </Link>
              <Link href="/account/my-ads/inactive" className={`${activeClassR}  relative border-[1px] text-base font-medium border-gray-300 border-l-0 duration-300
                    px-8 py-3 rounded-r bg-white overflow-hidden`} onClick={handleClickR}>
                Inactive <span>0</span>
              </Link>
          </div>

          <input type="text" className=" rounded  px-6 py-3 border-[1px] border-[#d2d3d7]" placeholder="Search..."/>
        </section>
      </div>
    </>
  );
}
