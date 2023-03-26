import React from 'react'

export default function LayoutFooter({ 
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
        <div className='footer' style={style}>
            {children}
        </div>
    )
}