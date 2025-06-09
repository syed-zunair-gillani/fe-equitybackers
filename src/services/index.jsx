import qs from "qs"
import { Request } from "@/config/Axios"

export async function getHomPage() {
  const params = qs.stringify({
    populate: [
      'Hero.products', "Founder.Image", "Founder.List",
      "LandingSolution.products", "Why.List_Items.Icon",
      "LandingSolution.products.Image", "LandingSolution.products.Banner_Image",
      "LandingSolution.products.Property_type", "LandingSolution.products.Lists",
      "LandingSolution.products.highlight", "LandingSolution.products.Process",
      "LandingSolution.products.Resources.Image", "LandingSolution.products.Resources.Buttons"

    ],
  })
  const response = await Request(`/home-page?${params}`);
  return response.data
}


export async function getTestimonials() {
  const params = qs.stringify({
    populate: [
      "Image"
    ],
  })
  const response = await Request(`/testimonials?${params}`);
  return response.data
}

export async function getFaqsGeneral() {
  const params = qs.stringify({
    filters: {
      Type: {
        $eq: 'General Questions'
      }
    },
  });

  const response = await Request(`/faqs?${params}`);
  return response.data;
}



export async function getAboutPage() {
  const params = qs.stringify({
    populate: [
      'Banner.Background_Image', "Banner.Button", "Our_Mission.Image",
      'Our_Mission.Buttons', 'Founder.Image', 'Founder.List', 'Our_value.Image',
      'Our_value.Feature', 'our_process', 'our_team.Image', 'our_team.Buttons',
      'Resources.Buttons'
    ],
  })
  const response = await Request(`/about-page?${params}`);
  return response.data
}


export async function getBrokerPage() {
  const params = qs.stringify({
    populate: [
      "Hero.Button", "Why.List", "Why.List.Icon"
    ],
  })
  const response = await Request(`/brokers-page?${params}`);
  return response.data
}


export async function getProducts() {
  const params = qs.stringify({
    populate: [
      "Banner_Image", "Image", "Property_type", "Lists", "highlight", "Process", "Resources.Image",
      "Resources.Buttons"
    ],
  })
  const response = await Request(`/products?${params}`);
  return response.data
}

export async function getSingleProducts(slug) {
  const params = qs.stringify({
    populate: [
      "Banner_Image", "Image", "Property_type", "Lists", "highlight.Icon", "Process", "Resources.Image",
      "Resources.Buttons"
    ],
    filters: {
      Slug: {
        $eq: slug
      }
    }
  })
  const response = await Request(`/products?${params}`);
  return response.data
}
