import React from "react";
type ImageType = {
    title ?: string,
    text: string,
    icon  ?: string,
    index : number
}
 const ImageBlock : React.FC<ImageType> = ({title, text, icon, index}) => {
return(
    <div key={index} className="image-container">
        {title && <h2>{title}</h2>}
       {icon &&  <img src={icon} alt="" /> }
       <p>{text}</p>
    </div>
)
}
export default ImageBlock