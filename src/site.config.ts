export const siteConfig = {
  business: {
    name: "Atlas Power Solutions",
    tagline: "Smart, Reliable Electrical Solutions",
    description:
      "Atlas Power Solutions delivers premium electrical, air conditioning, and automation services across the Sunshine Coast. Our work is trusted by homeowners, builders, and commercial clients.",
    abn: "83 235 145 601",
   
    licenses: {
      electrical: "89852",
      //
      arctick: "AU57407",
      security: "", // add if needed
      //
    },
    headquarters: {
      address: "Unit 4, 22 Power Lane, Sunshine Coast, QLD 4551",
      region: "Sunshine Coast",
      postcode: "4551",
    },
    contact: {
      phone: "(07) 5428 1461",
      email: "info@atlaspowersolutions.com.au",
    },
  },

  social: {
    instagram: "https://instagram.com/atlaspowersolutions",
    facebook: "https://facebook.com/atlaspowersolutions",
    email: "mailto:info@atlaspowersolutions.com.au",
    youtube: "https://youtube.com/@atlaspowersolutions",
    tiktok: "https://tiktok.com/@atlaspowersolutions",
    linkedin: "",
  },

  links: {
    getQuote: "/get-a-quote",
    callNow: "tel:0754281461",
    bookingForm: "/book-now",
    contact: "/contact",
    privacyPolicy: "/privacy-policy",
    termsOfService: "/terms",
  },

  brand: {
    logo: {
      src: "/logo/logo-dark.svg",
      alt: "Atlas Power Solutions Logo",
    },
    favicon: "/favicon.ico",
    themeColor: "#FFD700", // your primary brand color
  },

  footer: {
    displayCertifications: true,
    certifications: [
      { name: "Master Electrician", src: "/logos/master-electrician.png" },
      { name: "ARCtick Certified", src: "/logos/arctick.png" },
    ],
    copyright: `© ${new Date().getFullYear()} Atlas Power Solutions`,
  },

  seo: {
    title: "Atlas Power Solutions | Electrical & AC Services Sunshine Coast",
    description:
      "Licensed electricians delivering reliable and smart air conditioning, solar and automation installations across the Sunshine Coast.",
    siteUrl: "https://atlaspowersolutions.com.au",
    keywords: [
      "electrician Sunshine Coast",
      "air conditioning install",
      "smart home automation",
      "solar electrical services",
    ],
  },
}
