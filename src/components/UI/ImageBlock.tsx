import React from "react";
type ImageType = {
    title ?: string,
    text: string,
    icon  ?: string,
    index : number,
    className ?: string
}
 const ImageBlock : React.FC<ImageType> = ({title, text, icon, index, className}) => {
return(
    <div key={index} className={"image-container"+ className} >
        {title && <h2>{title}</h2>}
       {icon &&  <img src={icon} alt={title} /> }
       <p>{text}</p>
    </div>
)
}
export default ImageBlock