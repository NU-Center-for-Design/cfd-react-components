import React from 'react'

export default function QueryMenu({ 
    children,
    width,
    className
 }: { 
    children: JSX.Element,
    width: string,
    className: string
 }) {

    const style = {
        height: '100vh',
        width: width,
        "overflow-y": "auto",
        "overflow-x": "hidden",
    }

    return (
        <div className={`query-menu ${className}`} style={style}>
            {children}
        </div>
    )
}