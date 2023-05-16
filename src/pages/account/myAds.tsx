import { useState } from "react";
import AccNavbar from "../../components/PageParts/AccNavbar";

export default function MyAds() {
    const [stateL, setStateL] = useState(true);
    const handleClickL = () => {
        setStateL(current => !current);
    };
    let activeClassL = stateL ? "btn_active" : "account_btn";

    const [stateR, setStateR] = useState(true);
    const handleClickR = () => {
        setStateR(current => !current);
    };

    let activeClassR = stateR ? "btn_active" : "account_btn";


  return (
    <>
      <AccNavbar />
      <div className="container max-w-[1140px] mx-auto ">
        <h1>My Ads</h1>
        <section className="flex justify-between items-center ">
          <div>
            <button
              className={`${activeClassL}  relative border-[1px] text-base font-medium border-gray-300 duration-300
              px-8 py-3 rounded-l bg-white`}  onClick={handleClickL}>
              <div>
                Active <span>0</span>
              </div>
            </button>

            <button
              className={`${activeClassR}  relative border-[1px] text-base font-medium border-gray-300 border-l-0 duration-300
                    px-8 py-3 rounded-r bg-white`} onClick={handleClickR}>
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
