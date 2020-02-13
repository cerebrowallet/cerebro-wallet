import { createGlobalStyle } from 'styled-components';

import { Theme } from '../utils/styled';

const Globals = createGlobalStyle<{ theme: Theme }>`
  body {
    line-height: 1.5;
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.tertiary};
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  #root > div {
    position: absolute;
    width: 100%;
    height: 100%;
    will-change: transform, opacity;
  }
  
  p a {
    text-decoration: none;
    color: ${props => props.theme.colors.secondary};
    transition: color .15s ease-in;
    
    &:hover {
      color: #4E6B81;
    }
    
    &:active {
      color: #1B242A;
    }
  }
 `;

export default Globals;
