import React from 'react'

export default function MenuItem(props: 
    {
        children: JSX.Element
        key: string
        className?: string
        id?: string
        value?: string
    }) {
    return (
        <option key={props.key} value={props.value} className={props.className} id={props.id}>
            {props.children}
        </option>
    )
}