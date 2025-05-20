import Proven from "@/components/proven";
import Mission from "@/tempates/about/mission";
import Main from "@/tempates/fix-flip/main";
import Lending from "@/tempates/home-page/lending";




export default function Home() {
    return (
        <>
            <Main />
            <Mission
                label="WHERE WE LEND"
                title="Find Lending Opportunities Near You"
                text="Looking for financing in your state? Our lending map shows where we operate, making it easy for you to explore available loan programs in your area."
                img="/images/WHERE-WE-LEND.svg"
                buttonText="View Lending Map"
                buttonLink="/"
                reverse={true}
                highlightImage={true}
            />
            <Lending
                heading="Everything You Need to Know"
                headingColor="#000"
                backgroundColor="#f5f2ec"
                cards={[
                    {
                        bgColor: '#fff',
                        label: 'FOR INVESTORS',
                        title: 'Quick capital to grow your real estate portfolio.',
                        buttonText: 'Apply Now',
                        buttonLink: '/investor-apply',
                        buttonStyle: 'text-light bg-primary',
                    },
                    {
                        bgColor: '#fff',
                        label: 'FOR BROKER PARTNERS',
                        title: 'Expand your reach with our flexible programs.',
                        buttonText: 'Join Our Program',
                        buttonLink: '/broker-join',
                        buttonStyle: 'border-2 border-primary text-primary hover:bg-primary hover:text-light ',
                    },
                ]}
            />

            <div className="bg-[#b3cee8] !py-0">
                <Mission
                    backgroundColor="#b3cee8"
                    label="CONSTRUCTION DRAW"
                    title="Support and Loan Management"
                    text="Our dedicated construction loan support team is here to assist you every step of the way. Access essential resources, get expert guidance, and manage your loan with ease—all in one place."
                    img="/images/construction-loan-1.jpg"
                    buttonText="View Construction Loan Resources"
                    buttonLink="/"
                    reverse={false}
                />
            </div>
            <Proven />

        </>
    );
}