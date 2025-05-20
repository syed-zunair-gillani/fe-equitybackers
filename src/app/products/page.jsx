import ProductTemplate from "@/tempates/products/product";
import Productcard from "@/tempates/products/productcard"

export default function Home() {
  return (
    <>
      <section className="bg-[#f5f2ec] bg-cover h-auto ">
        <ProductTemplate/>
           <div>
            {[...Array(5)].map((_, index) => (
                <Productcard key={index} />
            ))}
        </div>

      </section>
    </>
  );
}
