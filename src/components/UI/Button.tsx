import * as React from 'react'
 import '@/scss/components/_button.scss'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
children : React.ReactNode
}


 const Button : React.FC<ButtonProps> = ({children, ...rest}) => {

return (
    <button className='button-ui' {...rest} >
        {children}
    </button>
)
}

export default Button