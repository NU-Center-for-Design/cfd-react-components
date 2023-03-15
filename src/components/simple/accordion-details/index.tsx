import React from "react";

export default function AccordionDetails(props: 
    {
        children: JSX.Element
        className?: string
        id?: string
    }) {
    return (
        <div className={`accordion-details, ${props.className}`} id={props.id}>
            { props.children }
        </div>
    )
}