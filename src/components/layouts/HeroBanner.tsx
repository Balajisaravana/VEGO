import React from "react";
import RightBanner from "../UI/RightBanner";
import { heroBannerData as data, hangingBoxData as boxData } from "@/mock/home_content";
import ImageBlock from "../UI/ImageBlock";




const HeroBanner  = () => {
  
    return (
        <section className="hero-container">
        
         <RightBanner HeaderText={data.title}  isButton={true} imageRight={data.imageLink} altText={data.altText} className='hero' >

            <p className="sub-para"> {data.subText}</p>
         </RightBanner>
         <aside className="float-container">
         {boxData.map((data,key)=>
                <ImageBlock title={data.title} text={data.para} icon={data.icon} index={key} />
          )}
         </aside>
       
        </section>
    )
}

export default HeroBanner
