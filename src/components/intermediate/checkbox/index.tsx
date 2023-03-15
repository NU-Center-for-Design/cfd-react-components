import React from "react"
import Label from "../../simple/label"

export default function Checkbox(props: 
    {
        className?: string
        id?: string
        labelClassName?: string
        label: JSX.Element
        checked?: boolean
        disabled?: boolean
        onChange?: React.ChangeEventHandler<HTMLInputElement>
        name?: string
        value?: string | number
    }) {
    return (
      <div>
        <input
            type="checkbox"
            name={ props.name }
            value={ props.value }
            disabled={ props.disabled }
            onChange={ props.onChange }
            checked={ props.checked }
            className={ props.className }
          />
        <Label
          className={ props.labelClassName }
        >
          { props.label }
        </Label>
      </div>
    )
  }