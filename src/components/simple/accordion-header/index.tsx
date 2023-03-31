import React, { MouseEvent, useState } from 'react'

export default function AccordionHeader(props:
    {
        children: JSX.Element
        onClick?: (e?: MouseEvent<HTMLElement>) => void
    }) {
    return (
        <summary 
        style={{display: 'contents'}}
        className={'accordion-heading'}
         onClick={props.onClick}
        >
            { props.children }     
        </summary>
    )
}