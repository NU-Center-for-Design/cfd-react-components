import React from 'react'

export default function Slider(props: 
    {
        min: number
        max: number
        step: number
        className?: string
        id?: string
        isDisabled?: boolean
        isRequired?: boolean
        onBlur?: React.FocusEventHandler<HTMLInputElement>
        onChange?: React.ChangeEventHandler<HTMLInputElement>
        onFocus?: React.FocusEventHandler<HTMLInputElement>
    }) {   
    return (
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        className={props.className ? props.className : ''}
        id={props.id ? props.id : ''}
        disabled={props.isDisabled ? props.isDisabled : false}
        required={props.isRequired ? props.isRequired : false}
        onChange={props.onChange ? props.onChange : (e) => {}}
      />
    )
}