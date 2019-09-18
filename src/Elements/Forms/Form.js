import styled from 'styled-components/macro'
import { Form as FormikForm } from 'formik'

const Form = styled(FormikForm)`
  background: ${props => props.bgColor || 'white'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  border: ${props => props.border || 'none'};
  border-radius: 3px;
  color: ${props => props.color ? props.color : '#1d1d1d'};
  display: flex;
  flex-direction: column;
  padding: 15px 5px 10px 5px;
  border: 1px solid lightgrey;
`

export default Form
