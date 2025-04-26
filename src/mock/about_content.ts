import { title } from 'process'
import editing from '../assets/Editing.png'
import { aboutImages } from '.'

export const ourMission = {
    title : 'Our Mission',
    para : ' We believe in challenging the status quo with unconventional and innovative marketing strategies. Our mission is to captivate audiences, drive measurable results, and establish VOGA Media as the go-to partner for brands aiming to redefine their online presence with creativity and impact.',
     img : editing
}

export const whyVogo = {
     title: 'Why VOGA Media?',
        subtitle : 'Our Done for you model focus on:',
        imageLink : aboutImages.bannercard,
        list : [
            {
                value : "Unmatched Creativity – We think outside the box to deliver unique and effective marketing solutions.",
            },
            {
                value : "Tech-Driven Strategies – Leveraging the latest digital trends to keep brands ahead of the curve.",
            },
            {
                value : "Future-Focused Approach – We don’t just follow trends; we create them.",
            },
            {
                value : 'Result-Oriented Execution – Every campaign is crafted for maximum engagement, reach, and conversion.'
            },
          
            
        ],
        // para : 'We will have an Question and answer session with you first to identify your brand needs and what you exactly want to build & scale immersive business.',
        altText : 'person-poster'
}