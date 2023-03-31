import React, { useState } from "react";

export default function Accordion(props:
    {
        children: JSX.Element
        className?: string
        id?: string
        openSrc?: string
        closeSrc?: string
    }) {
        const [isOpen, setOpen] = useState(false)

        const handleClick = () => {
            setOpen(!isOpen)
        }

    return (
        <details 
            style={{display: 'flex'}}
            className={props.className}
            id={ props.id }
            onClick={handleClick}
        >
            { props.children }
            {
                (props.openSrc && props.closeSrc) && (
                    <img src={isOpen ? props.openSrc : props.closeSrc}/>
                ) 
            }
        </details>
    )
  }