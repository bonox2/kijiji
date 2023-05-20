import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MyProfile() {
  const [stateL, setStateL] = useState(true);
  const handleClickL = () => {
    if (stateL == true) {
    } else {
      setStateR((current) => !current);
      setStateL((current) => !current);
    }
  };
  let activeClassL = stateL ? "btn_active_left" : "account_btn_left";

  const [stateR, setStateR] = useState(false);
  const handleClickR = () => {
    if (stateR == true) {
    } else {
      setStateR((current) => !current);
      setStateL((current) => !current);
    }
  };
  let activeClassR = stateR ? "btn_active_left" : "account_btn_left";

  return (
    <>
      <aside className=" w-72   ">
        <div
          className="flex flex-col justify-center items-start rounded relative
        bg-white shadow-[0_1px_2px_0_rgb(0_0_0_/_10%)]  px-5 py-5 w-full gap-3 z-0  my-7"
        >
          <div className=" absolute w-full h-16 left-0 bg-[#373373] top-0 -z-10 rounded-t"></div>
          <div
            className="flex justify-center items-center flex-col gap-5 text-[#103a56]
           font-semibold 	mx-auto w-full"
          >
            <Image
              src="/images/avatars/1.png"
              alt="Profile picture"
              width={80}
              height={80}
              className="rounded-full overflow-hidden bg-black"
            />
            <span className="text-2xl">Illia</span>
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col justify-center items-center  w-full">
              <span className="text-base font-normal leading-6 text-center whitespace-nowrap ">
                {" "}
                1 day
              </span>
              <span className="text-xs font-normal leading-4 text-gray-600 text-center whitespace-nowrap">
                avg reply
              </span>
            </div>

            <div className="flex flex-col justify-center items-center  border-[#eee] border-l-2 w-full">
              <span className="text-base font-normal leading-6 text-center whitespace-nowrap">
                77%
              </span>
              <span className="text-xs font-normal leading-4 text-gray-600 text-center whitespace-nowrap">
                reply rate
              </span>
            </div>

            <div className="flex flex-col justify-center items-center  border-[#eee] border-l-2 w-full">
              <span className="text-base font-normal leading-6 text-center whitespace-nowrap">
                1 year
              </span>
              <span className="text-xs font-normal leading-4 text-gray-600 text-center whitespace-nowrap">
                on Kijiji
              </span>
            </div>
          </div>
        </div>
        <section className="flex justify-between items-center ">
          <div className=" flex flex-col justify-center  w-full">
            <Link
              href="/account/profile/listings"
              className={`${activeClassL}  relative border-[1px] text-base font-medium border-gray-300 duration-300
              px-8 py-3 rounded-t bg-white overflow-hidden `}
              onClick={handleClickL}
            >
              Listings <span>0</span>
            </Link>
            <Link
              href="/account/profile/reviews"
              className={`${activeClassR}  relative border-[1px] text-base font-medium border-gray-300 border-t-0 duration-300
                    px-8 py-3 rounded-b bg-white overflow-hidden `}
              onClick={handleClickR}
            >
              Reviews <span>0</span>
            </Link>
          </div>

        </section>
      </aside>
    </>
  );
}
