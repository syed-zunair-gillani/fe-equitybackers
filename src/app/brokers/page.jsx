import PageNav from '@/components/page-nav';
import { getBrokerPage } from '@/services';
import Contact from '@/tempates/brokers/contact';
import Main from '@/tempates/brokers/main'
import Products from '@/tempates/brokers/products';
import Testimonials from '@/tempates/brokers/testimonials';
import Faq from '@/tempates/fix-flip/faq';
import Archwest from '@/tempates/home-page/archwest';
import ProductCard from '@/tempates/products/productcard';


export default async function Home() {
    const [
        brokerPage
    ] = await Promise.all([
        getBrokerPage(),
    ]);
    console.log("🚀 ~ Home ~ brokerPage:", brokerPage)

    return (
        <>
            <Main />
            <Archwest
                label="WHY ARCHWEST"
                heading="Broker Lender Relationship Made Easy"
                cards={[
                    {
                        icon: '/svg/settings.svg',
                        title: 'Benefits of a Trusted Partnership',
                        description: 'With an experienced and dedicated broker team, we have a proven track record of delivering exceptional service.',
                        bgColor: '#F5F2EC',
                    },
                    {
                        icon: '/svg/settings.svg',
                        title: 'Swift Closings for Your Clients',
                        description: 'Our streamlined application process and efficient underwriting allows us to provide fast and reliable funding solutions.',
                        bgColor: '#F5F2EC',
                    },
                    {
                        icon: '/svg/settings.svg',
                        title: 'Flexible and Attractive Loan Terms',
                        description: 'We work with you to accommodate the unique needs of your clients, including customized loan structures, adjustable repayment schedules, and competitive rates.',
                        bgColor: '#F5F2EC',
                    },
                ]}
            />
            <Products />
            <PageNav links={pageNavLinks} />
            <ProductCard />
            <Contact />
            <Testimonials />
            <Faq />
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