import React from 'react'

export default function VisualizationViewport({ 
    children,
 }: { 
    children: JSX.Element,
 }) {

    const style = {
        height: '100%',
        width: '100%',
        Position: "relative",
    }

    return (
        <div className='visualization-viewport' style={style}>
            {children}
        </div>
    )
}