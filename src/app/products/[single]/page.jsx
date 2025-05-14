import Highlight from "@/tempates/fix-flip/highlight";
import Nav from "@/tempates/fix-flip/nav";
import Main from "@/tempates/fix-flip/main";
import ProductCard from "@/tempates/products/productcard";
import Process from "@/tempates/fix-flip/process"
import Faq from "@/tempates/fix-flip/faq";


export default function Home() {
  return (
    <>
      <Main />
       <Nav/>
      <ProductCard />    
      <Highlight/>
      <Process/>
      <Faq/>
     
    </>
  );
}
