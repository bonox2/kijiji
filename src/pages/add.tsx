import Image from "next/image";
import Header from "../components/PageParts/Header";

export default function Product() {
  return (
    <body className="bg-gray-100">
      <Header />
      <main className="container mx-auto my-[20px] flex flex-nowrap justify-between">
        <article className="w-[500px];">
          <section className="flex justify-center items-start flex-col">
            <h1 className="text-[24px] font-bold  text-[#3e4153] my-0;">
              BRAND NEW IN BOX. HOME GYM SET for $1299. RETAILS $3000
            </h1>
            <span className="text-[24px] text-[#37a864] ;">$1,299</span>
          </section>
          <section>
            <Image
              src="/product.jpg"
              alt="Picture of the author"
              width={700}
              height={445}
            />
          </section>
          <section className="w-[700px]">
            <h2 className=" text-xl font-normal leading-[26px] text-[#373373] mt-0 mb-5 mx-0">
              Description
            </h2>
            <p className="w-[100%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id,
              repudiandae blanditiis voluptate earum illo, ex minima qui rem
              magni sapiente est! Dicta iusto, sit deserunt deleniti eius
              dolore? Nesciunt eum rem quibusdam obcaecati, esse eius nobis
              velit. Illo natus quos delectus similique debitis dolor dolorem
              repudiandae ea incidunt. Incidunt debitis voluptate ea magni.
              Cupiditate nemo et ex suscipit esse a ratione vitae sed dolores,
              vero eius labore iusto alias tempora molestiae officia impedit
              ipsam sequi nesciunt accusantium non officiis! Eos quasi, adipisci
              quo fugit asperiores porro eveniet excepturi dignissimos sapiente
              voluptas. Praesentium quasi a quam magni consequatur. Sed, sequi!
            </p>
            <p>561 visits</p>
          </section>
        </article>
        <aside className="w-[100%] flex ml-8 flex-col justify-start items-start">
          <span>Posted over a month ago</span>
          <span>Location: 1234 Main St, New York, NY 10001</span>
          <div className=" flex flex-col justify-center items-center rounded bg-white shadow-[0_1px_2px_0_rgb(0_0_0_/_10%)] mb-5 px-5 py-[25px]">
            <h3 className="box-border text-[18px] text-indigo-900 text-base relative text-center font-medium px-[20px]  mb-5 ;">
              Contact <span>name</span>
            </h3>
            <form action="submit" name="contactTo">
              <textarea name="message" className=" py-5 px-3 border-[1px] rounded border-solid  text-[#8e909b] mb-5  text-base min-w-0 w-full">
                Hi, I am interested! Please contact me if this is still
                available.
              </textarea>
              <button
                type="submit"
                className="text-white py-2 w-[100%] bg-[#3e4153] rounded"
              >
                Send message
              </button>
            </form>
          </div>
          <div>
            <span>Name</span>
            <span>View 7 listig</span>
            <div>
              <div>avg reply</div>
              <div>reply rate</div>
              <div>on Kijiji</div>
            </div>
          </div>
        </aside>
      </main>
    </body>
  );
}
