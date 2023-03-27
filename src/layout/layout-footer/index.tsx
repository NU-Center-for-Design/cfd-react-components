import React from 'react'

export default function LayoutFooter({ 
    children,
    height,
    className
 }: { 
    children: JSX.Element,
    height: string,
    className: string
 }) {

    const style = {
        height: height,
        width: '100vw',
        display: "flex",
        "flex-direction": "row",
    }

    return (
        <div className={`footer ${className}`} style={style}>
            {children}
        </div>
    )
}