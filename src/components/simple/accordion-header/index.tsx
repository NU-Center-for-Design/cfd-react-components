import React, { MouseEvent, useState } from 'react'

export default function AccordionHeader(props:
    {
        children: JSX.Element
        onClick?: (e?: MouseEvent<HTMLElement>) => void
        openSrc?: string
        closeSrc?: string
    }) {
        const [isOpen, setOpen] = useState(false)

        const handleClick = (event: MouseEvent<HTMLElement>) => {
            setOpen(!isOpen)
            if (props.onClick) {
                props.onClick(event)
            }
        }

    return (
        <summary className={'accordion-heading'} onClick={handleClick}>
            { props.children }
            {
                    (props.openSrc && props.closeSrc) && (
                        <img src={isOpen ? props.openSrc : props.closeSrc}/>
                    ) 
            }      
        </summary>
    )
}