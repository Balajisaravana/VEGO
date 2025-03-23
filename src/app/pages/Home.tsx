import HeroBanner from "@/components/layouts/HeroBanner";
import WeHelpLayout from "@/components/layouts/WeHelp";
import Button from "@/components/UI/Button";
import ImageBlock from "@/components/UI/ImageBlock";
import NavBar from "@/components/UI/NavBar";
import RightBanner from "@/components/UI/RightBanner";
import { servicesData  } from "@/mock/home_content";
import banner from '../../assets/home_banner.svg'
import Footer from "@/components/layouts/Footer";
import { dotList } from "@/mock";



const HomePage = () => {
    
    return (
        <>
    <header>
    <NavBar className="_home"></NavBar>
   
  
    </header>
    <main className="home-main">
    <HeroBanner></HeroBanner>
    <section className="home-services">
        <h2>Services</h2>
        <div className="services-body">
        {servicesData.map((data,index)=> 
        <ImageBlock title={data.title} text={data.para} index={index} className="_service"/>
        )}
        </div>
       
   

    </section>
    <section className="home-help">
    <WeHelpLayout/>
    </section>
    <section className="home-promises">
        <h2 >What if we don’t keep up our promise?</h2>
        <ul>
            <li> <img src={dotList}/> <span> Within a month we guarantee you to increase your sales by 10x and  creating an army of high quality audience who would be willing to buy any new product / service you offer.</span> </li>
            <li> <img src={dotList}/><span>If we fail to do , we will refund your money fully and work with you free for next 30 days to achieve your desired result. </span></li>
        </ul>
        <span>"Ready to explode your brand’s social media growth in 30 days?” Click below to book your free strategy session and reserve your spot in our limited Sales Accelerator program!</span>
            <Button>Let's Work Together</Button>
    </section>
    <section className="home-transfrom">
        <RightBanner HeaderText="How It Transforms the Brand:" imageRight={banner}  altText="Banner Image" isButton={false}>
            <p>
            We invite your customers to share their experiences through user-generated content (UGC) and a structured brand ambassador program. By reposting photos, videos, and testimonials, we celebrate the community and turn customers into brand storytellers.
            </p>
            <p>

By showcasing real people and their authentic experiences, the brand becomes part of its customers’ lifestyles, moving beyond passive messaging to build a community-driven narrative that resonates on a personal level.
            </p>
        </RightBanner>
        
    </section>
    </main>
        
        <Footer/>
        
        </>
    )
}

export default HomePage