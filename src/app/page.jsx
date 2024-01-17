import AnnouncementComponent from '@/components/Announcement'
import CTA from '@/components/CTA'
import CardProgram from '@/components/CardProgram'
import CompanyList from '@/components/CompanyList'
import Footer from '@/components/Footer'
import MyHeader from '@/components/Header'
import Hero from '@/components/Hero'
import Metrics from '@/components/Metrics'
import Review from '@/components/Review'
import SpendingDemo from '@/components/SpendingDemo'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <AnnouncementComponent />
      <MyHeader />
      <Hero />
      <CompanyList />
      <CardProgram />
      <SpendingDemo />
      <Metrics />
      <Review />
      <CTA />
      <Footer />
    </>
  )
}
