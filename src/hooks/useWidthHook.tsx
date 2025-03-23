import { useEffect, useState } from "react";


export const useWindowWidth = (width: number): boolean => {
    const [isWide, setIsWide] = useState<boolean>(false);
  
    useEffect(() => {
      const checkWidth = () => setIsWide(window.innerWidth < width);
      
      checkWidth(); // Check on mount
      window.addEventListener("resize", checkWidth);
      
      return () => window.removeEventListener("resize", checkWidth);
    }, [width]);
  
    return isWide;
  };
  
  
  