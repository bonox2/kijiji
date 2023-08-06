import Link from "next/link";
import MyAds from "../../../components/PageParts/MyAds";



export default function Active() {
    
    return (
        <>
        <MyAds />
        <div className="w-full  py-24 flex flex-col justify-center items-center">
            <h2 className="mb-4 text-3xl font-semibold text-center">You have no active ads at the moment.</h2>
            <div className=" text-lg">Why not <Link href="/post-ad" className="font-bold text-[#2681db] 
            hover:text-[#276792]  hover:underline duration-200">post an ad</Link> now?</div>
        </div>
        </>
    );
}
