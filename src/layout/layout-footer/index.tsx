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

    const style: React.CSSProperties = {
        height: height,
        width: '100vw',
        display: "flex",
        flexDirection: 'row',
    }

    return (
        <div className={`footer ${className}`} style={style}>
            {children}
        </div>
    )
}