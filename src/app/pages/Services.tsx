import Footer from "@/components/layouts/Footer"
import Button from "@/components/UI/Button"
import NavBar from "@/components/UI/NavBar"
import RightBanner from "@/components/UI/RightBanner"
import { service_First  as  data_FB , service_Sec as data_SB, service_Third as data_TB } from "@/mock/service_content"
import { useNavigate } from "react-router-dom"


const Services = () => {
    const navigate = useNavigate();
    return(
        <>
        <header>
            <NavBar className="_service"/>
        </header>
        <main className="services-main">
        <section className="services-first">
            <h2 className="main-header">Services</h2>
            <p className="main-subheader">Stop wasting time and money on faulty and ineffective social media campaigns.</p>
            <p className="main-para">we take your brand to the next level, crafting unique experiences that connect, inspire, and drive results. Let’s make your brand unforgettable.</p>
            <Button onClick={() => navigate('/contact')} >Let's Connect</Button>
        </section>
        <section className='service-second'>
            <RightBanner HeaderText={data_FB.title}  isButton={false} imageRight={data_FB.imageLink} altText={data_FB.altText} className='side'>
           
                <ul className="service-ul">
                <span className="service-subtitle">{data_FB.subtitle}</span>
                    {
                        data_FB.list.map((item)=> <li className="service-list"> {item.value}</li> )
                    }
                    <p className="service-span">{data_FB.para}</p>
                </ul>
            </RightBanner>
        </section>
        <section className="service-third">
            <figure className="left-img"><img src={data_SB.imageLink}></img> </figure>
                 
                    <div className="third-container">
                            <h2 className="third-title">{data_SB.title}</h2>
                        <span className="third-span">{data_SB.subTitle}</span>
                        <p className="third-para">{data_SB.para}</p>
                    </div>
                   
        </section>
        <section className="service-forth">
        <RightBanner HeaderText={data_TB.title}  isButton={true} imageRight={data_TB.imageLink} altText={data_TB.altText} className='side'>
                <ul className="service-ul">
                    <span className="service-subtitle">{data_TB.subtitle}</span>
                    {
                        data_TB.list.map((item)=> <li className="service-list"> {item.value}</li> )
                    }
                    <p className="service-span">{data_TB.para}</p>
                </ul>
            </RightBanner>
        </section>
        </main>
        
        <footer>
            <Footer/>
        </footer>

        </>
    )
}

export default Services