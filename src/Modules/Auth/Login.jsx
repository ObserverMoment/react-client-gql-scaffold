import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import { Card } from '../../Elements/Layout/Card'
import Form from '../../Elements/Forms/Form'
import { TextInputField, TextAreaField } from '../../Elements/Forms/Inputs'
import { SubmitButton } from '../../Elements/Forms/Buttons'
import { LOGINSINGLEFACTOR } from '../../Apollo/mutations'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter an email'),
  password: Yup.string()
    .min(4, 'Password should be at least 4 characters long')
    .required('Please enter a password'),
  message: Yup.string(),
})

const LoginUser = (props) => {
  const [loginSingleFactor] = useMutation(LOGINSINGLEFACTOR)
  return (
    <Card bgColor='lightgrey' zHeight={2} height='800px' width='500px'>
      <h3>Login form</h3>
      <Formik
        initialValues={{email: '', password: '', message: ''}}
        validationSchema={validationSchema}
        onSubmit={({email, password}) => {
          const res = loginSingleFactor({variables: {email, password}})
        }}
      >
        {() => (
          <Form>
            <Field name='email' placeholder='Enter your email' component={TextInputField} required/>
            <Field name='password' type='password' placeholder='Enter your password...' component={TextInputField} required/>
            <Field name='message' type='textarea' placeholder='Enter your message...' component={TextAreaField}/>
            <SubmitButton type='submit'>Submit</SubmitButton>
          </Form>
        )}
      </Formik>
    </Card>
  )
}

export default LoginUser
