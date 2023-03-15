import React from 'react'

export default function Select(props: 
    {
        children: JSX.Element
        value: string
        className?: string
        defaultValue?: string
        id?: string
        isDisabled?: boolean
        isRequired?: boolean
        name?: string
        onBlur?: React.FocusEventHandler<HTMLSelectElement>
        onChange?: React.ChangeEventHandler<HTMLSelectElement>
        onFocus?: React.FocusEventHandler<HTMLSelectElement>
        placeholder?: string
    }) {   
    return (
        <select 
            className={props.className}
            defaultValue={props.defaultValue}
            disabled={props.isDisabled}
            id={props.id}
            name={props.name}
            onBlur={props.onBlur}
            onChange={props.onChange}
            onFocus={props.onFocus}
            placeholder={props.placeholder}
            required={props.isRequired}
            value={props.value}
        >
            { props.children }
        </select>
    )
}