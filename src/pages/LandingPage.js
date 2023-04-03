import React from 'react'
import Hero from '../components/homepage/hero/Hero'
import OurService from '../components/homepage/ourService/Service'
import WhyUs from '../components/homepage/whyus/WhyUs'
import Testimonial from '../components/homepage/testimonial/Testimonial'
import CtaSection from '../components/homepage/cta/cta'
import Faq from '../components/homepage/faq/Faq'
import Navbar from "../components/header/navbar/Navbar"
import Footer from "../components/header/footer/Footer"
import { serviceCom } from '../components/constant/listService'
import { whyUsCom } from '../components/constant/listwhyUs'
import { testimonialCom } from '../components/constant/lisTestimonial'
import { faqCom } from '../components/constant/listFaq'
const props = {
  serviceCom, 
  whyUsCom, 
  testimonialCom, 
  faqCom, 
}

export default function HomePage() {
  return (
    <>
    <Navbar/>
    <main>
      <Hero />
      <OurService {...props}/>
      <WhyUs {...props}/>
      <Testimonial {...props} />
      <CtaSection />
      <Faq {...props}/>
    </main>
    <Footer />
    </>
  )
}
