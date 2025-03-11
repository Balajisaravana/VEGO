import { BrandLogo } from "@/mock/index"
 const Footer = () => {
    return (
        <footer className="footer-container">
            <img src={BrandLogo} width={"250px"}></img>
            <span className="footer-side">Result Oriented Branding Agency that transforms your brand an experience with high ROI </span>

            <aside>
            <h3>Have A General Inquiry?</h3>
            <span>If you have a general inquiry and FAQ, you can contact us via email at: ragav@vogadynamics.com</span>
            </aside>
           
            
        </footer>
    )
}

export default Footer