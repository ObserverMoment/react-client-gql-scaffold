import React from 'react'
import styled, { css } from 'styled-components/macro'
import { unSnakeText } from '../../utils/helpers'

const Field = styled.div`
  padding: 15px 5px 5px 5px;
  width: 100%;
  font-size: 1em;
`

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 16px;
  font-size: 0.8em;
  font-weight: bold;
`

const inputDefaults = css`
  padding: 15px;
  margin: 10px;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  width: calc(100% - 20px);
  transition: all 0.4s;
  font-size: 0.9em;
  &::placeholder {
    opacity: 0.7;
  }
`

const TextInput = styled.input`
  ${inputDefaults}
  border-color: ${p => p.hasError ? 'red' : 'lightgrey'};
`

const TextArea = styled.textarea`
  ${inputDefaults}
  border-color: ${p => p.hasError ? 'red' : 'lightgrey'};
`

const InputErrorMessage = styled.div`
  color: red;
  font-size: 0.8em;
  padding: 5px 10px 10px 10px;
  transition: all 0.5s;
  transform-origin: top;
  opacity: ${p => p.hasError ? 1 : 0};
  transform: scaleY(${p => p.hasError ? 1 : 0});
  max-height: ${p => p.hasError ? '80px' : 0};
`

const TextInputField = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const hasError = touched[field.name] && errors[field.name]
  return (
    <Field>
      <Label htmlFor={field.name}>
        {unSnakeText(field.name)}{props.required && '*'}
      </Label>
      <TextInput type="text" {...field} {...props} hasError={hasError}/>
      <InputErrorMessage hasError={hasError}>{errors[field.name]}</InputErrorMessage>
    </Field>
  )
}

const TextAreaField = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <Field>
    <Label htmlFor={field.name}>
      {unSnakeText(field.name)}{props.required && '*'}
    </Label>
    <TextArea type="textarea" {...field} {...props} />
    {touched[field.name] &&
      errors[field.name] && <InputErrorMessage>{errors[field.name]}</InputErrorMessage>}
  </Field>
)

export {TextInputField, TextAreaField}
