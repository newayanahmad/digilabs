
"use client"
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
import Email from '@/components/Email'
import AdminLink from '@/components/AdminLink'
import { useLayoutEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState({})
  useLayoutEffect(() => {
    fetch("/api/get-data", { method: "POST" })
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }
    , [])

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
