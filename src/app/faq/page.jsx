import { getFaqs } from "@/services";
import Faq from "@/tempates/faq/faq";
import Main from "@/tempates/faq/main";
import { groupFAQsByType } from "@/utils";



export default async function Faqs() {
  const [
    faqs
  ] = await Promise.all([
    getFaqs()
  ]);
  
  console.log("🚀 ~ Faqs ~ faqs:", faqs)
  return (
    <>
      <Main />
      <Faq data={groupFAQsByType(faqs)}/>
    </>
  );
}
