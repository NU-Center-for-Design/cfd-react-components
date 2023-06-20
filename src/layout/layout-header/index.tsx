import React from 'react'

export default function LayoutHeader({ 
    children,
    height,
    className,
    id,
 }: { 
    children: JSX.Element,
    height: string,
    className: string,
    id: string,
 }) {

    const style: React.CSSProperties = {
        height: height,
        width: '100vw',
        display: "flex",
        flexDirection: 'row',
    }

    return (
        <div id={id} className={`header ${className}`} style={style}>
            {children}
        </div>
    )
}