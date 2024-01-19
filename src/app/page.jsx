
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
import getMetadata from './actions'
import Email from '@/components/Email'
import AdminLink from '@/components/AdminLink'

export default async function Home() {
  const data = await getMetadata();

  return (
    <>
      <AdminLink />
      <AnnouncementComponent />
      <MyHeader image_url={data.logo_url} />
      <Hero button_text={data.button_text} />
      <Email />
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
