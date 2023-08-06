import MyAds from "../../../components/PageParts/MyAds";



export default function Inactive() {
    return (
        <>
        <MyAds />
        <div className="w-full mx-auto py-24 flex flex-col justify-center items-center">
            <h2 className="mb-4 text-3xl font-semibold ">You have no inactive ads.</h2>
            <div className=" text-lg text-center">This is where you would see any of your ads that are not visible to buyers, such as recently expired ads.</div>
        </div>
        </>
    );
}