export function getCompleteURL(path){
    return `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_BASE_URL}${path}`
}


export function groupFAQsByType(faqsArray) {
  // Create an object to hold grouped FAQs
  const groupedFAQs = {};

  // Loop through each FAQ to group them by their 'Type'
  faqsArray.forEach(faq => {
    // If this 'Type' hasn't been added to the groupedFAQs, initialize it
    if (!groupedFAQs[faq.Type]) {
      groupedFAQs[faq.Type] = [];
    }

    // Push the FAQ to the corresponding 'Type'
    groupedFAQs[faq.Type].push({
      id: faq.id,
      documentId: faq.documentId,
      Question: faq.Question,
      Answer: faq.Answer
    });
  });

  // Convert the groupedFAQs object into the desired format
  const result = Object.keys(groupedFAQs).map(type => ({
    title: type,
    faqs: groupedFAQs[type]
  }));

  return result;
}
