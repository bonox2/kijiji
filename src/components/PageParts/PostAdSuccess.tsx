
import Image from "next/image";
import Link from "next/link";

export default function PostAdSuccess({ createdAdId, onCreateNew }) {
  return (
    <section className="w-full h-screen absolute bg-black/25 top-0 left-0 z-9999 flex items-center justify-center">
      <div className="w-[600px] h-96 bg-white mx-auto ">

        <div className=" flex w-72 justify-between items-center mx-auto mt-16">
          <Link
            href={`/ads/${createdAdId}`}
            className="text-white font-bold whitespace-nowrap transition-colors ease-linear duration-200 px-4 py-3 
                  rounded shadow-lg  bg-[#373373] hover:bg-[#4a4675]"
          >
            Go to ad
          </Link>

          <button
            className="text-white font-bold whitespace-nowrap transition-colors ease-linear duration-200 px-4 py-3 
                  rounded shadow-lg  bg-[#373373] hover:bg-[#4a4675]"
            onClick={() => onCreateNew()}
          >
            Create new ad
          </button>
        </div>
      </div>
    </section>
  );
}
