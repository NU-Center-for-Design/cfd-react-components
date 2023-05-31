import React from 'react'
import Label from '../../simple/label'

export default function Checkbox(props: 
    {
      id: string
      name: string
      className?: string
      labelClassName?: string
      label: JSX.Element
      checked?: boolean
      disabled?: boolean
      onChange?: React.ChangeEventHandler<HTMLInputElement>
      value?: string | number
    }) {
    return (
      <div style={{ display: "flex;", }}>
        <input
            type="checkbox"
            name={ props.name }
            value={ props.value }
            disabled={ props.disabled }
            onChange={ props.onChange }
            checked={ props.checked }
            className={ props.className }
            id={ props.id }
          />
        <Label
          className={ props.labelClassName }
          for={ props.id }
        >
          { props.label }
        </Label>
      </div>
    )
  }