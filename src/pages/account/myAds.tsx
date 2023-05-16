import { useState } from "react";
import AccNavbar from "../../components/PageParts/AccNavbar";

export default function MyAds() {
    const [state, setState] = useState(true);
    const handleClick = () => {
        setState(current => !current);
    };

    let activeClass = state ? "btn_active" : "account_btn";


  return (
    <>
      <AccNavbar />
      <div className="container max-w-[1140px] mx-auto ">
        <h1>My Ads</h1>
        <section className="flex justify-between items-center ">
          <div>
            <button
              className={`${activeClass}  relative border-[1px] text-base font-medium border-gray-300 duration-300
              px-8 py-3 rounded-l bg-white`}  onClick={handleClick}>
              <div>
                Active <span>0</span>
              </div>
            </button>

            <button
              className={`${activeClass}  relative border-[1px] text-base font-medium border-gray-300 border-l-0 duration-300
                    px-8 py-3 rounded-r bg-white`} onClick={handleClick}>
              <div>
                Inactive <span>0</span>
              </div>
            </button>
          </div>

          <input type="text" />
        </section>
      </div>
    </>
  );
}
