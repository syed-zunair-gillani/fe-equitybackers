import PageNav from "@/components/page-nav";
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
            <PageNav  links={pageNavLinks}/>
            <Mission />
            <div className='bg-[#f5f2ec]'>
                <Founders />
            </div>
            <Values />
            <Process />
            <Team />



        </>
    );
}


const pageNavLinks = [
    {
        label : 'About',
        link:  '/about'
    },
    {
        label : 'Team',
        link:  '/team'
    },
    {
        label : 'Careers',
        link:  '/careers'
    }
]