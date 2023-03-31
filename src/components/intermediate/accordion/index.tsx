import React, { useState } from "react";
const CloseArrow = require('./assets/close-arrow.svg')
const OpenArrow = require('./assets/open-arrow.svg')

export default function Accordion(props:
    {
        children: JSX.Element
        className?: string
        id?: string
    }) {
        const [isOpen, setOpen] = useState(false)

    return (
        <details style={{display: 'flex'}} className={props.className} id={ props.id }>
            { props.children }
            {
                isOpen ? <OpenArrow /> : <CloseArrow />
            }
        </details>
    )
  }