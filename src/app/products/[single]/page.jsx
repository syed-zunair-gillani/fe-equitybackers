import Highlight from "@/tempates/fix-flip/highlight";
import Main from "@/tempates/fix-flip/main";
import ProductCard from "@/tempates/products/productcard";
import Process from "@/tempates/fix-flip/process"
import Faq from "@/tempates/fix-flip/faq";
import PageNav from "@/components/page-nav";


export default function Home() {
  return (
    <>
      <Main />
      <PageNav links={pageNavLinks}/>
      <ProductCard />    
      <Highlight/>
      <Process/>
      <Faq/>
     
    </>
  );
}

const pageNavLinks = [
  { label: 'Ground Up', link: '/ground-up' },
  { label: 'Fix & Flip', link: '/fix-and-flip' },
  { label: 'DSCR', link: '/dscr' },
  { label: 'Portfolio', link: '/portfolio' },
  { label: 'Bridge', link: '/bridge' },
];
