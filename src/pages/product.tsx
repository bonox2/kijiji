import Image from "next/image";

export default function Product() {
  return (
    <main>
      <article>
        <section>
          <h1>BRAND NEW IN BOX. HOME GYM SET for $1299. RETAILS $3000</h1>
          <span>$1,299</span>
          <span>Posted over a month ago</span>
          <span>Location: 1234 Main St, New York, NY 10001</span>
        </section>
        <section>
          <Image
            src="/product.jpg"
            alt="Picture of the author"
            width={800}
            height={445}
          />
        </section>
        <section>
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id,
            repudiandae blanditiis voluptate earum illo, ex minima qui rem magni
            sapiente est! Dicta iusto, sit deserunt deleniti eius dolore?
            Nesciunt eum rem quibusdam obcaecati, esse eius nobis velit. Illo
            natus quos delectus similique debitis dolor dolorem repudiandae ea
            incidunt. Incidunt debitis voluptate ea magni. Cupiditate nemo et ex
            suscipit esse a ratione vitae sed dolores, vero eius labore iusto
            alias tempora molestiae officia impedit ipsam sequi nesciunt
            accusantium non officiis! Eos quasi, adipisci quo fugit asperiores
            porro eveniet excepturi dignissimos sapiente voluptas. Praesentium
            quasi a quam magni consequatur. Sed, sequi!
          </p>
          <p>561 visits</p>
        </section>
      </article>
      <aside>
        <div>
          <form action="submit" name="contactTo">
            <h3>Contact name</h3>
            <textarea name="message"></textarea>
            <button type="submit">Send message</button>
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
  );
}
