import PageNav from "@/components/page-nav";
import Proven from "@/components/proven";
import { getAboutPage } from "@/services";
import Main from "@/tempates/about/main";
import Mission from "@/tempates/about/mission";
import Team from "@/tempates/about/team";
import Values from "@/tempates/about/values";
import Process from "@/tempates/fix-flip/process";
import Founders from "@/tempates/home-page/founders";
import { getCompleteURL } from "@/utils";

export default async function About() {
    const [
        aboutPage
    ] = await Promise.all([
        getAboutPage(),
    ]);

    const {Banner, Our_Mission,Founder, Our_value, our_process, our_team, Resources } = aboutPage

    return (
        <>
            <Main data={Banner}/>
            <PageNav links={pageNavLinks} />
            <Mission
                label={Our_Mission?.Label}
                title={Our_Mission?.Title}
                text={Our_Mission?.Info}
                img={getCompleteURL(Our_Mission?.Image?.url)}
            />
            <div className='bg-[#f5f2ec]'>
                <Founders data={Founder[0]} />
            </div>
            <Values data={Our_value} />
            <Process data={our_process} />
            <Team data={our_team}/>
            <Proven data={Resources}/>
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





