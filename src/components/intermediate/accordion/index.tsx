import React from 'react';

export default function Accordion(props:
    {
        children: JSX.Element
        onClick?: (e?: React.MouseEvent<HTMLElement>) => void
        className?: string
        id?: string
        openSrc?: string
        closeSrc?: string
    }) {
        // const [isOpen, setOpen] = React.useState(false)
        // // console.log("test", isOpen)
        // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        //     // setOpen(!isOpen)
        //     if (props.onClick) {
        //         props.onClick(event)
        //     }
        // }

    return (
        <details 
            className={props.className}
            id={ props.id }
        >
            { props.children }
            {
                    (props.openSrc && props.closeSrc) && (
                        <img src="" /> //{isOpen ? props.openSrc : props.closeSrc}/>
                    ) 
            } 
        </details>
    )
  }