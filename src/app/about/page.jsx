import PageNav from "@/components/page-nav";
import Proven from "@/components/proven";
import Main from "@/tempates/about/main";
import Mission from "@/tempates/about/mission";
import Team from "@/tempates/about/team";
import Values from "@/tempates/about/values";
import Process from "@/tempates/fix-flip/process";
import Founders from "@/tempates/home-page/founders";



export default function Home() {
    return (
        <>
            <Main />
            <PageNav links={pageNavLinks} />
            <Mission
                label="OUR MISSION"
                title="Close More Loans, Open More Doors"
                text="Our mission is to empower investors to secure more loans and create greater opportunities—not just for themselves, but for a market in need of quality housing. In today’s changing landscape, investors need a trusted lending partner that offers innovative products along with speed and certainty of execution. As one of the fastest-growing companies in private lending, Archwest is committed to supporting borrowers and broker partners in achieving this shared vision."
                img="/images/mission.jpg"
               
            />
            <div className='bg-[#f5f2ec]'>
                <Founders />
            </div>
            <Values />
            <Process />
            <Team />
            <Proven/>



        </>
    );
}


const pageNavLinks = [
    {
        label: 'About',
        link: '/about'
    },
    {
        label: 'Team',
        link: '/team'
    },
    {
        label: 'Careers',
        link: '/careers'
    }
]





