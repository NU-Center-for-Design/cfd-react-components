import React from "react";

export default function MenuItem(props: 
    {
        children: JSX.Element
        className?: string
        id?: string
        key?: string
        value?: string
    }) {
    return (
        <option key={props.key} value={props.value} className={props.className} id={props.id}>
            {props.children}
        </option>
    )
}