import { createGlobalStyle } from 'styled-components';

export const breakPoints = {
    mobileSmall: 320,
    mobileMedium: 375,
    mobileLarge: 425,
    tablet: 768,
}

export const mediaQueries = key => {
    return style => `@media(min-width: ${breakPoints[key]}px ){${style}}`
}

export const maxMediaQueries = key => {
    return style => `@media(max-width: ${breakPoints[key]}px ){${style}}`
}

const AppGlobalStyle = createGlobalStyle`

    :root{
    --offWhite: #FCFCFC;
    --mainBlue: #001242;
    --tertiary: #EF8A17;
    --text: #040F16;
    --altBlue: #0094C6;
    --altBlueShade: #1032ca;
    --richBlack: #051014;
    --offShade: rgba(223, 219, 219, 0.6);

    --museBlue: #0892A5;
    --darkCyan: #06908F;
    --persianGreen: #0CA4A5;
    }

    body{
        font-family: 'Crimson Text', cursive;
        color: var(--richBlack) !important;
        margin: 0;
        padding: 0;
    }

    .white-text{
        color: white
    }
`;

export default AppGlobalStyle ;