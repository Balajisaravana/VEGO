import React from "react";
import HeroImage from "@/components/UI/HeroBanner";
import NavBar from "@/components/UI/NavBar";
import { heroImg } from "@/mock";
import { ourMission as data_SB, whyVogo as data_TB } from "@/mock/about_content";
import RightBanner from "@/components/UI/RightBanner";
import Footer from "@/components/layouts/Footer";


const About = () => {
  return (
    <>
    <header>
    <NavBar className="_service"/>
    </header>
    <main className="about-main">
      <section className="about-first">
      <HeroImage   title="Welcome to VOGA "
        subtitle="Discover amazing features and solutions tailored for you"
        // backgroundImage="/images/hero-background.jpg"
        height="600px"
        ctaButton={{
          text: "Get Started",
          onClick:  () => window.location.href = '/contact'
        }} backgroundImage={heroImg}/>
      </section>
        
        <section className="about-second">
          <h2> Our Vision</h2>
          <p> " At VOGA Media, we are shaping the future of digital marketing by seamlessly blending creativity, cutting-edge technology, and strategic insights. Our goal is to craft powerful digital experiences that amplify brands and help them reach new heights. "
          </p>
        </section>
         <section className="about-third">
                         <img src={data_SB.img}></img>
                            <div className="third-container">
                                    <h2 className="third-title">{data_SB.title}</h2>
                               
                                <p className="third-para">{data_SB.para}</p>
                            </div>
                           
                </section>
                <section className="about-forth"> 
                <RightBanner HeaderText={data_TB.title}  isButton={true} imageRight={data_TB.imageLink} altText={data_TB.altText} className='side'>
                <ul className="about-ul">
                    <span className="about-subtitle">{data_TB.subtitle}</span>
                    {
                        data_TB.list.map((item)=> <li className="about-list"> {item.value}</li> )
                    }
                    
                </ul>
            </RightBanner>
                </section>
    </main>
    <Footer/>
    </>
  )
}

export default About