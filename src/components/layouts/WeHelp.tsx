import { weHelpData } from "@/mock/home_content";
import ImageBlock from "../UI/ImageBlock";


export const WeHelpLayout = () => {
    return (
        <div className="help-container">
            <h2> HOW WE HELP</h2>
            <div className="help-rotate">
            {weHelpData.map((data, index) => 
            <ImageBlock text={data.para} index={index} className="_help"/>
            )}
            </div>
           
        </div>
    )
}

export default WeHelpLayout