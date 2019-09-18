import styled from 'styled-components/macro'

const zHeights = {
  1: '0 1px 2px 1px rgba(0, 0, 0, 0.2)',
  2: '0 1px 4px 2px rgba(0, 0, 0, 0.2)',
  3: '0 1px 6px 3px rgba(0, 0, 0, 0.2)',
}

const Card = styled.div`
  background: ${props => props.bgColor || 'white'};
  width: ${props => props.width || '300px'};
  height: ${props => props.height || '400px'};
  box-shadow: ${props => props.zHeight ? zHeights[props.zHeight] : 'none'};
  border: ${props => props.border || 'none'};
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 3px;
  color: ${props => props.color ? props.color : '#1d1d1d'};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'column'};
  padding: ${props => props.padding ? props.padding : '10px'};
`

export { Card }
