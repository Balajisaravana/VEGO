// import React from "react";


// type HeroBannerProps = {
//   title?: string;
//   subtitle?: string;
//   backgroundImage: string;
//   ctaText?: string;
//   ctaLink?: string;
// };

// const HeroImage: React.FC<HeroBannerProps> = ({
//   title,
//   subtitle,
//   backgroundImage,
//   ctaText,
//   ctaLink,
// }) => {
//   return (
//     <div className="hero-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="hero-content">
//         <h1>{title}</h1>
//         {subtitle && <p>{subtitle}</p>}
//         {ctaText && ctaLink && (
//           <a href={ctaLink} className="cta-button">
//             {ctaText}
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HeroImage;
import React, { ReactNode } from 'react';
import Button from './Button';
// import './HeroBanner.scss';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  height?: string;
  children?: ReactNode;
  ctaButton?: {
    text: string;
    onClick: () => void;
  };
}

const HeroImage: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundColor = '#1e293b',
  textColor = 'white',
  height = '500px',
  children,
  ctaButton,
}) => {
  const bannerStyle = {
    height,
    backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
  };

  const textStyle = {
    color: textColor,
  };

  return (
    <div 
      className="hero-banner"
      style={bannerStyle}
    >
      <div className="hero-banner__overlay">
        <h1 
          className="hero-banner__title"
          style={textStyle}
        >
          {title}
        </h1>
        
        {subtitle && (
          <p 
            className="hero-banner__subtitle"
            style={textStyle}
          >
            {subtitle}
          </p>
        )}
        
        <div className="hero-banner__content">
          {children}
        </div>
        
        {ctaButton && (
          <Button
            onClick={ctaButton.onClick}
            className="hero-banner__cta-button"
          >
            {ctaButton.text}
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeroImage;