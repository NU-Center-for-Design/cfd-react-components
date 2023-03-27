import React from 'react'

export default function VisualizationViewport({ 
    children,
    className,
 }: { 
    children: JSX.Element,
    className: string
 }) {

    const style = {
        height: '100%',
        width: '100%',
        Position: "relative",
    }

    return (
        <div className={`visualization-viewport ${className}`} style={style}>
            {children}
        </div>
    )
}