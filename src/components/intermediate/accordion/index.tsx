import React from "react";

export default function Accordion(props:
    {
        children: JSX.Element
        className?: string
        id?: string
    }) {
    return (
        <details className={props.className} id={ props.id }>
            { props.children }
        </details>
    )
  }