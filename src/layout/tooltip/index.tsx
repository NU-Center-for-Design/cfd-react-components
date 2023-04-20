import React from 'react';

export default function Tooltip() {

    const style = {
        position: "absolute",
        left: "0px",
        top: "0px",
        visibility: "hidden",
        padding: "2px",
        "pointer-events": "none"
    }

    return (
        <div className="tooltip" style={style}></div>
    )
}