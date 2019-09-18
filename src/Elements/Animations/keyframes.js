import { keyframes } from 'styled-components/macro'

const fadeGrowIn = keyframes`
  from {
    opacity: 0;
    transform-origin: top;
    transform: scaleY(0);
  }
  to {
    opacity: 1;
    transform-origin: top;
    transform: scaleY(1);
  }
`

export { fadeGrowIn }
