import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import MailList from '../components/mailList/MailList'
import Navebar from '../components/navbar/Navbar'



const MasterLayout = ({ children }) => {
  return (
    <>
      <Navebar/>
      <Header type="list"/>

      { children }

      <MailList/>
      <Footer/>
    </>
  )
}

export default MasterLayout