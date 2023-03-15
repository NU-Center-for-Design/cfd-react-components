import React from "react";

export default function AccordionHeader(props:
    {
        children: JSX.Element
        onClick?: React.MouseEventHandler<HTMLElement>
    }) {
    return (
        <summary className={'accordion-heading'} onClick={ props.onClick }>
        { props.children }
        {/* Add SVG component of Chevron / Expand Icon */}
      </summary>
    )
}