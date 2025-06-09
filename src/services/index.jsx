import qs from "qs"
import { Request } from "@/config/Axios"

async function getHomPage() {
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




























// async function getPopularSearch() {
//   const params = qs.stringify({
//     populate: [
//       'PopularSearch'
//     ],
//   })
//   const response = await Request(`/theme-option?${params}`);
//   return response.data
// }


// async function getStores() {
//   const sparams = qs.stringify({
//     populate: [
//       'Icon', "coupons_and_deals",
//     ],
//     filters: {
//       Favorit: {
//         $eq: true
//       }
//     },
//     pagination: {
//       limit: 10
//     }
//   })
//   const stores = await Request(`/stores?${sparams}`);
//   return stores?.data
// }



// async function getCategories() {
//   const cparams = qs.stringify({
//     populate: [
//       'Icon', "coupons_and_deals.Icon", "coupons_and_deals.categories", "coupons_and_deals.store"
//     ],
//     filters: {
//       Top: {
//         $eq: true
//       }
//     },
//     pagination: {
//       limit: 25
//     }
//   })
//   const categories = await Request(`/categories?${cparams}`);
//   // Sort alphabetically by 'name' (or use the correct key like 'title')
//   const sorted = categories?.data?.sort((a, b) => {
//     const nameA = a.Name.toLowerCase();
//     const nameB = b.Name.toLowerCase();
//     return nameA.localeCompare(nameB);
//   });

//   return sorted;
// }


// async function getCouponAndDeals() {
//   const cdparams = qs.stringify({
//     populate: [
//       'Icon', "categories.Icon", "store.Icon", "store.Social"
//     ],
//     pagination: {
//       limit: 100
//     },
//     sort: ["createdAt:desc"]
//   })
//   const couponAndDeals = await Request(`/coupons-and-deals?${cdparams}`);
//   return couponAndDeals?.data
// }

// async function getFavoritesCoupon() {
//   const fcdparams = qs.stringify({
//     populate: [
//       'Icon', "categories.Icon", "store.Icon", "store.Social"
//     ],
//     filters: {
//       FavoritesCoupon: {
//         $eq: true
//       }
//     },
//     pagination: {
//       limit: 20
//     },
//     sort: ["createdAt:desc"]
//   })
//   const favoritesCoupon = await Request(`/coupons-and-deals?${fcdparams}`);
//   return favoritesCoupon?.data
// }

// async function getExclusiveCoupon() {
//   const exparams = qs.stringify({
//     populate: [
//       'Icon', "categories.Icon", "store.Icon", "Feature_image", "store.Social"
//     ],
//     filters: {
//       Slider: {
//         $eq: true
//       }
//     },
//     pagination: {
//       limit: 20
//     }
//   })
//   const exParamsCoupon = await Request(`/coupons-and-deals?${exparams}`);
//   return exParamsCoupon?.data
// }

// async function getFooter() {
//   const params = qs.stringify({
//     populate: '*',
//   });
//   const footerRes = await Request(`/footer?${params}`);
//   return footerRes?.data
// }

// async function getHeader() {
//   const params = qs.stringify({
//     populate: '*',
//   });
//   const headerRes = await Request(`/header?${params}`);
//   return headerRes?.data
// }

// async function getFavorites50Coupon() {
//   const params = qs.stringify({
//     populate: [
//       'Icon', "categories.Icon", "store.Icon", "store.Social"
//     ],
//     filters: {
//       FavoritesCoupon: {
//         $eq: true
//       }
//     },
//     sort: ["createdAt:desc"],
//     pagination: {
//       limit: 50
//     }
//   })
//   const favoritesCoupon = await Request(`/coupons-and-deals?${params}`);
//   return favoritesCoupon?.data
// }

// async function getAllStore() {
//   const params = qs.stringify({
//     populate: [
//       'Icon', "coupons_and_deals",
//     ],
//     pagination: {
//       limit: 1000
//     }
//   })
//   const stores = await Request(`/stores?${params}`);
//   return stores?.data
// }


// async function getSingleStore(params) {
//   const qParams = qs.stringify({
//     populate: [
//       'Icon', "author", "Social", "coupons_and_deals",
//       'coupons_and_deals.Icon', "coupons_and_deals.categories.Icon", "coupons_and_deals.store.Icon", "coupons_and_deals.store.Social"
//     ],
//     filters: {
//       Slug: {
//         $eq: params.slug
//       }
//     },
//   })
//   const stores = await Request(`/stores?${qParams}`);
//   return stores?.data?.[0]
// }

// async function getAllCategories() {
//   const params = qs.stringify({
//     populate: [
//       'Icon', "coupons_and_deals.Icon", "coupons_and_deals.categories", "coupons_and_deals.store", "coupons_and_deals.store.Social"
//     ],
//     pagination: {
//       limit: 400
//     }
//   })
//   const categories = await Request(`/categories?${params}`);
//   return categories?.data?.sort((a, b) =>
//     a.Name.localeCompare(b.Name, undefined, { sensitivity: 'base' })
//   );
// }



// async function getSingleCategory(param) {
//   const cparams = qs.stringify({
//     populate: [
//       'Icon', "coupons_and_deals.Icon", "coupons_and_deals.categories", "coupons_and_deals.store.Icon", "coupons_and_deals.store.Social"
//     ],
//     filters: {
//       Slug: {
//         $eq: param?.slug
//       }
//     },
//   })
//   const category = await Request(`/categories?${cparams}`);

//   const params = qs.stringify({
//     populate: [
//       'Icon'
//     ],
//     filters: {
//       Top: {
//         $eq: true
//       }
//     },
//     pagination: {
//       limit: 12
//     }
//   })
//   const categories = await Request(`/categories?${params}`);
//   return {
//     category: category?.data?.[0],
//     categories: categories?.data
//   }
// }

// async function getAboutPage() {
//   const params = qs.stringify({
//     populate: '*',
//   });
//   const pageResponse = await Request(`/about-page?${params}`);
//   return pageResponse?.data
// }

// async function getContactPage() {
//   const params = qs.stringify({
//     populate: '*',
//   });
//   const pageResponse = await Request(`/Contact?${params}`);
//   return pageResponse?.data
// }

// async function getCookiePolicy() {
//   const params = qs.stringify({
//     populate: '*',
//   });
//   const pageResponse = await Request(`/cookie-policy?${params}`);
//   return pageResponse?.data
// }

// async function getPrivacyPage() {
//   const params = qs.stringify({
//     populate: '*',
//   });
//   const pageResponse = await Request(`/privacy?${params}`);
//   return pageResponse?.data
// }

// async function getTermAndConditionPage() {
//   const params = qs.stringify({
//     populate: '*',
//   });
//   const pageResponse = await Request(`/terms-ans-condition?${params}`);
//   return pageResponse?.data
// }


// export {
//   getHomPage,
//   getStores,
//   getCategories,
//   getCouponAndDeals,
//   getFavoritesCoupon,
//   getExclusiveCoupon,
//   getFooter,
//   getHeader,
//   getFavorites50Coupon,
//   getAllStore,
//   getSingleStore,
//   getAllCategories,
//   getSingleCategory,
//   getAboutPage,
//   getCookiePolicy,
//   getPrivacyPage,
//   getTermAndConditionPage,
//   getPopularSearch,
//   getContactPage
// }