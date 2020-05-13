import { createGlobalStyle } from 'styled-components';

import BasierCircleRegularWoff from './fonts/basiercircle-regular-webfont.woff';
import BasierCircleRegularWoff2 from './fonts/basiercircle-regular-webfont.woff2';
import BasierCircledSemiBoldWoff from './fonts/basiercircle-semibold-webfont.woff';
import BasierCircleSemiBoldWoff2 from './fonts/basiercircle-semibold-webfont.woff2';

import { Theme } from '../utils/styled';

const Globals = createGlobalStyle<{ theme: Theme }>`
  @font-face {
    font-family: 'basier_circle';
    src: url(${BasierCircleRegularWoff2}) format('woff2'),
         url(${BasierCircleRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'basier_circle';
    src: url(${BasierCircleSemiBoldWoff2}) format('woff2'),
         url(${BasierCircledSemiBoldWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
  }

  body {
    line-height: 1.5;
    color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.tertiary};
    font-family: 'basier_circle', sans-serif;
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
    color: ${(props) => props.theme.colors.secondary};
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
