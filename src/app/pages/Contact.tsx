import React from 'react'
import ContactUI from '../../components/contact/ContactUI';
import NavBar from '@/components/UI/NavBar';
import Footer from '@/components/layouts/Footer';
// import MultiStepForm from '@/components/layouts/MultiForm';
export default function Contact() {
  return (
    <>
    <header>
      <NavBar className="_service"/>
    </header>
      <main>
      <ContactUI/>
      </main>
    <Footer/>

    </>
  )
}
