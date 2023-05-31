import React from 'react'

export default function LayoutHeader({ 
    children,
    height,
    className
 }: { 
    children: JSX.Element,
    height: string,
    className: string,
 }) {

    const style: React.CSSProperties = {
        height: height,
        width: '100vw',
        display: "flex",
        flexDirection: 'row',
    }

    return (
        <div className={`header ${className}`} style={style}>
            {children}
        </div>
    )
}