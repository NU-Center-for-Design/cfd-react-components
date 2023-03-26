import React from 'react'

export default function LayoutHeader({ 
    children,
    height
 }: { 
    children: JSX.Element,
    height: number
 }) {

    const style = {
        height: height,
        width: '100vw',
        display: "flex",
        "flex-direction": "row",
    }

    return (
        <div className='header' style={style}>
            {children}
        </div>
    )
}