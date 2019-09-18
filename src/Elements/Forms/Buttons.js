import styled from 'styled-components/macro'

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`

const Button = styled.button`
  padding: 10px;
  margin: 10px;
  border-radius: 3px;
  border: none;
  border-bottom: 1px solid lightblue;
  font-size: 1em;
  transition: all 0.3s;
`

const SubmitButton = styled(Button)`
  background: blue;
  color: white;
  &:hover {
    background: green;
    cursor: pointer;
  }
`

export {ButtonWrapper, SubmitButton}
