import { getBrokerPage, getFaqsGeneral, getProducts, getTestimonials } from '@/services';
import Contact from '@/tempates/brokers/contact';
import Main from '@/tempates/brokers/main'
import Products from '@/tempates/brokers/products';
import Testimonials from '@/tempates/brokers/testimonials';
import Faq from '@/tempates/fix-flip/faq';
import Archwest from '@/tempates/home-page/archwest';


export default async function Home() {
    const [
        brokerPage,
        faqs,
        testimonials,
        products
    ] = await Promise.all([
        getBrokerPage(),
        getFaqsGeneral(),
        getTestimonials(),
        getProducts()
    ]);

    return (
        <>
            <Main data={brokerPage?.Hero} />
            <Archwest data={brokerPage?.Why} />
            <Products products={products}/>
            <Contact />
            <Testimonials data={testimonials} />
            <Faq data={faqs}/>
        </>
    );
}