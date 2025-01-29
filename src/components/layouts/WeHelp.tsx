import { weHelpData } from "@/mock/home_content";
import ImageBlock from "../UI/ImageBlock";


export const WeHelpLayout = () => {
    return (
        <div>
            <h2> HOW WE HELP</h2>
            {weHelpData.map((data, index) => 
            <ImageBlock text={data.para} index={index}/>
            )}
        </div>
    )
}

export default WeHelpLayout