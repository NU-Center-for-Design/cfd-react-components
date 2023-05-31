import React from 'react'

export default function Form(props:
    {
        children: JSX.Element
        className?: string
        id?: string
        name?: string
        disabled?: boolean
        form?: string
    }) {
    return (
        <form
        id={ props.id }
        className={ props.className }
        >
            <fieldset
                name={ props.name }
                disabled={ props.disabled }
                form={ props.form }
                style={{ 
                    border: "none",
                    padding: 0,
                    margin: 0,
                }}
            >
                { props.children }
            </fieldset>
        </form>
    )
}