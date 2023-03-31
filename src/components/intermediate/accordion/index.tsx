import React, { useState } from "react";

export default function Accordion(props:
    {
        children: JSX.Element
        className?: string
        id?: string
    }) {
    return (
        <details 
            style={{display: 'flex'}}
            className={props.className}
            id={ props.id }
        >
            { props.children }
        </details>
    )
  }