import React, { CSSProperties } from "react";
type ImageType = {
    title ?: string,
    text: string,
    icon  ?: string,
    index ?: number,
    className ?: string,
    style?: CSSProperties
}
 const ImageBlock : React.FC<ImageType> = ({title, text, icon, index, className, style}) => {
return(
    <div key={index} className={"image-container"+ className} style={style} >
        {title && <h2>{title}</h2>}
       {icon &&  <img src={icon} alt={title} /> }
       <p>{text}</p>
    </div>
)
}
export default ImageBlock