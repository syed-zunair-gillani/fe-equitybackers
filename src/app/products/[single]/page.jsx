import Highlight from "@/tempates/fix-flip/highlight";
import Main from "@/tempates/fix-flip/main";
import ProductCard from "@/tempates/products/productcard";
import Process from "@/tempates/fix-flip/process"
import Faq from "@/tempates/fix-flip/faq";
import { getFaqsGeneral, getProducts, getSingleProducts } from "@/services";
import Nav from "./Nav";
import Proven from "@/components/proven";
import Mission from "@/tempates/about/mission";
import { getCompleteURL } from "@/utils";


export default async function Home({ params }) {
  const { single } = await params
  const [
    product,
    products,
    faqs
  ] = await Promise.all([
    getSingleProducts(single),
    getProducts(),
    getFaqsGeneral()

  ]);
  const data = product[0]
  
  return (
    <>
      <Main data={data} />
      <Nav links={products} />
      <ProductCard data={data} />
      <div className="mt-10" />
      <Highlight data={data} />
      {
        data?.Resources &&
        <div className="bg-[#B3CEE8]">
          <Mission
            label={data?.Resources?.Label}
            title={data?.Resources?.Title}
            text={data?.Resources?.Info}
            img={getCompleteURL(data?.Resources?.Image?.url)}
            buttonText={data?.Resources?.Buttons?.[0]?.Label}
            buttonLink={data?.Resources?.Buttons?.[0]?.Link}
          />
        </div>
      }
      <Process data={data?.Process} />
      <Faq data={faqs} />
      <Proven />
    </>
  );
}