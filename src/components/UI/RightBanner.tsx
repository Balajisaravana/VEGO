import React from "react";
import Button from "../UI/Button";

type RightBannerType = {
    HeaderText : string,
    // SubText : string,
    isButton : boolean,
    imageRight ?: string,
    altText ?: string
    children : React.ReactNode,
    className ?: string
}

const RightBanner : React.FC<RightBannerType> = ({children,HeaderText, isButton = false, imageRight, altText, className }) => {
    return (
        <div className="rb-container">
            <section className="left-content">
            <h2 className={className ? `header-${className}`:'header'}>
                {HeaderText}
            </h2>
            
                {children}
            
           <>
           {isButton && <Button> Let's Connect</Button>}
           </> 
            </section>
            <figure className="right-content">
            <img src={imageRight} alt={altText} />
            </figure>
         

        </div>
    )
}

export default RightBanner