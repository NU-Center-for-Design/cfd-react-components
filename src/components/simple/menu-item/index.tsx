import React from 'react'

export default function MenuItem(props: 
    {
        children: JSX.Element
        itemKey: string
        className?: string
        id?: string
        value?: string
    }) {
    return (
        <option key={props.itemKey} value={props.value} className={props.className} id={props.id}>
            {props.children}
        </option>
    )
}