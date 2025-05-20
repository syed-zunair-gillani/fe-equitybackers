
import Main from "@/tempates/blog/main";
import PageNav from "@/components/page-nav";
import Blog from "@/tempates/blog/blog";
import Card from "@/tempates/blog/card";
import Proven from "@/components/proven";



export default function Home() {
    return (
        <>
            <Main />
            <Blog />
            <PageNav links={pageNavLinks} />
            <Card />
            <Proven />


        </>
    );
}

const pageNavLinks = [
    { label: 'All Blogs', link: '/all-blogs' },
    { label: 'Investor Tips', link: '/investor-tips' },
    { label: 'Loan Products', link: '/loan-products' },
    { label: 'Market Trends', link: '/market-trends' },

];
