
export default function Error() {
  return (
    <section className="w-full h-screen absolute bg-black/25 top-0 left-0 z-9999 flex items-center justify-center">
      <div className="w-[600px] h-96 bg-white mx-auto ">

        <div className="flex flex-col items-center justify-center h-full">
          <svg className="text-[#fff] bg-[red] rounded" xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"  viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
          <h1 className="text-[#3e4153] text-[24px] font-bold mt-5">Something went wrong</h1>
        </div>

      </div>
    </section>
  );
}