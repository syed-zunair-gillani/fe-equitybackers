import { getFaqsGeneral, getHomPage, getTestimonials } from "@/services";
import HomePageTemplate from "@/tempates/home-page/page";

export default async function Home() {
  const [
    homePage,
    testimonials,
    faqs
  ] = await Promise.all([
    getHomPage(),
    getTestimonials(),
    getFaqsGeneral()
  ]);

  return (
    <>
      <HomePageTemplate
        data={homePage}
        testimonials={testimonials}
        faqs={faqs}
      />
    </>
  );
}
