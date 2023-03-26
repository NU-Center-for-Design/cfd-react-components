import React from 'react'

export default function QueryMenu({ 
    children,
    width
 }: { 
    children: JSX.Element,
    width: number
 }) {

    const style = {
        height: '100vh',
        width: width,
        "overflow-y": "auto",
        "overflow-x": "hidden",
    }

    return (
        <div className='query-menu' style={style}>
            {children}
        </div>
    )
}