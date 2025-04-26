import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useWindowWidth } from "@/hooks/useWidthHook";
import { SidebarUI } from "./Sidebar";

type CustomeNav = {
    className ?: string
}
interface HamburgerMenuProps {
    color?: string;
    size?: number;
  }

  interface NavbarProps {
    className?: string;
    links?: { path: string; label: string }[];
    buttonLabel?: string;
  }
  const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ color = "black", size = 24 }) => {
  
    return (
        <div>
         <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="6" width="18" height="2" fill={color} />
        <rect x="3" y="11" width="18" height="2" fill={color} />
        <rect x="3" y="16" width="18" height="2" fill={color} />
      </svg>
        </div>
     
    );
  };


  const CloseIcon: React.FC<{ color?: string; size?: number }> = ({
    color = "black",
    size = 24,
  }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const NavbarList: React.FC<NavbarProps> = ({
    className = "",
    links = [
      { path: "/", label: "Home" },
      { path: "/about", label: "About Us" },
      { path: "/services", label: "Services" },
      { path: "/contact", label: "Contact" },
    ],
    buttonLabel = "Let's Connect",
  }) => {
    return (
      <ul className={`nav-left${className}`}>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
        <li>
          <Link to={"/contact"}>
          <Button>{buttonLabel}</Button>
          </Link>
          
        </li>
      </ul>
    );
  };
  
 
const NavBar:  React.FC<CustomeNav> = ({className}) => {
    const width = useWindowWidth(1080)
    const color = className === '_home' ? '#CBE4DE' : '#2C3333'
    const [visible, setVisible] = useState<boolean>(false);
    return(
        <>
         <nav className={width ?  "nav-container" + className +'_mini' : "nav-container" + className}>
            <div>
             <h2 className={"nav-logo"+ className}>VOGA</h2>
            </div>
            {
                width ? <span onClick={()=> setVisible(true)}><HamburgerMenu  color={color} size={32}/> </span> : 
        
                    <NavbarList className={className}/>
            }
            
        </nav>
        <SidebarUI isVisible={visible}  className={className} icons={<span onClick={() => setVisible(false)}> <CloseIcon color={color}/></span>} header={<h2 className={"nav-logo"+ className}>VOGA</h2>} position="top" >
          
        
            <NavbarList className={className + '_mini'}/>
        </SidebarUI>
        </>
       
    )
}

export default NavBar