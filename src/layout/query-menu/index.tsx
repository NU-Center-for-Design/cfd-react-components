import React from 'react'

export default function QueryMenu({ 
    children,
    width,
    className,
    id,
 }: { 
    children: JSX.Element,
    width: string,
    className: string,
    id: string,
 }) {

    const style: React.CSSProperties = {
        height: '100vh',
        width: width,
        overflowY: "auto",
        overflowX: "hidden",
    }

    return (
        <div id={id} className={`query-menu ${className}`} style={style}>
            {children}
        </div>
    )
}