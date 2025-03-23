import { weHelpData } from "@/mock/home_content";
import ImageBlock from "../UI/ImageBlock";
import CarosuelUI from "../UI/CarosuelUI";
import { useWindowWidth } from "@/hooks/useWidthHook";


export const WeHelpLayout = () => {
    const total = weHelpData.length;
    const width = useWindowWidth(1200)
  const radiusX = 450; // Horizontal spread
  const radiusY = 400; 
  const radiusZ = 100 

  
    // const containers = Array.from({ length: total }, (_, i) => {
    //   const angle = (i * (360 / total)) * (Math.PI / 180); // Convert to radians
    //   const x = Math.cos(angle) * radiusX;
    //   const y = Math.sin(angle) * radiusY;
  
    //   return {
    //     transform: `translate(${x}px, ${y}px)`,
    //   };
    // });
    return (
        <div className={!width ? 'help-container' : 'help-container_mini'}>
            <h2> HOW WE HELP</h2>
            <div className="help-rotate">
              {!width ?   weHelpData.map((data, index) => {
                const angle = (index * (360 / total)) * (Math.PI / 180); // Convert to radians
                const x = Math.cos(angle) * radiusX;
                const y = Math.sin(angle) * radiusY;
                const z = Math.sin(angle) * radiusZ;
                return (
                    <ImageBlock text={data.para} index={index} className="_help" style={{  transform: `translate3d(${x}px, ${y}px, ${z}px) translate(-50%, -50%)`,}}/>
                )
            }) : <CarosuelUI  ></CarosuelUI>}
            
            </div>
           
        </div>
    )
}

export default WeHelpLayout