
import Image from "next/image";
import Link from "next/link";

export default function PostAdSuccess({ createdAdId, onCreateNew }) {
  return (
    <section className="w-full h-screen absolute bg-black/25 top-0 left-0 z-9999 flex items-center justify-center">
      <div className="w-[600px] h-96 bg-white mx-auto flex flex-col items-center justify-center ">
        <svg  fill="#00ff4c" height="150px" width="150px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.05 490.05" stroke="#00ff4c">
          <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"></path>
        </svg>  
         
         <div className=" mt-8 w">
          <button className="text-white font-bold whitespace-nowrap transition-colors ease-linear duration-200 px-4 py-3 
                    rounded shadow-lg  bg-[#373373] hover:bg-[#4a4675] mr-6">
            <Link href={`/ads/${createdAdId}`}>
              Go to ad
            </Link>
          </button>

          <button
            className="text-white font-bold whitespace-nowrap transition-colors ease-linear duration-200 px-4 py-3 
                  rounded shadow-lg  bg-[#373373] hover:bg-[#4a4675] "
            onClick={() => onCreateNew()}>
            Create new ad
          </button>
        </div>
      </div>
    </section>
  );
}
