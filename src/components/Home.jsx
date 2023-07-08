import Header from './header/Header';
import Footer from './footer/Footer';
import Form from './form/Form';
import Package from './package/Package';
import Project from './project/Project';
import Main from './three-first-section/Main';
import Test from './testimonial/Test';
import Why from './why/Why';
import React from 'react'

const Home = () => {
  return (
    <>
    <Header/>
     <Main/>
     <Project/>
     <Package/>
     <Why/>
     <Test/>
     <Form/>
     <Footer/>

    </>
  )
}

export default Home
