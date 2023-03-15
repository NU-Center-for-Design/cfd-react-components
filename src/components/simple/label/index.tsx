import React from "react"

export default function Label(props: 
    {
        children: JSX.Element
        className?: string
        for?: string
        id: string
    }) {
    return (
        <label
        htmlFor={ props.for }
        id={ props.id }
        className={ props.className }
        >
            { props.children }
        </label>
    )
}