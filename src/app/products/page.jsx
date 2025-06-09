import Proven from "@/components/proven";
import { getProducts } from "@/services";
import ProductTemplate from "@/tempates/products/product";
import Productcard from "@/tempates/products/productcard"

export default async function Home() {
  const [
    products
  ] = await Promise.all([
    getProducts()
  ]);


  return (
    <>
      <section className="bg-[#f5f2ec] bg-cover h-auto ">
        <ProductTemplate />
        <div>
          {products?.map((_, index) => (
            <Productcard key={index} data={_} />
          ))}
        </div>
      </section>
      <Proven />

    </>
  );
}
