import React from 'react'
import Label from '../../simple/label'

export default function FormLabel(props:
    {
        control: JSX.Element
        controlId: string
        label: JSX.Element
    }) {
    return (
        <>
        <Label for={ props.controlId }>
            { props.label }
        </Label>
        { props.control }
        </>
    )
}