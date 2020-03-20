import styled from 'styled-components';

export const ButtonContainer = styled.button `
    text-transform: capitalize;
    cursor: pointer;
    margin: 0.2rem 0.8rem;
    padding: 0.3rem 0.2rem;
    height: 3rem;
    width: auto;
    transition: all 0.5s ease-in-out;

    &:focus{
        outline: none;
    }

    ${props => {
        if (props.google){
            return `
                color: var(--offWhite) ;
                background: var(--altBlue) ;

                :hover{
                    color: ;
                    background: var(--altBlueShade) ;
                }
            `
        } else if( props.tertiary){
            return `
                color: var(--tertiary) ;
                border-color: var(--richBlack);

                :hover{
                    color: var(--altBlue);
                    background: var(--tertiary);
                    border: var(--altBlue);
                }
            `
        } else {
            return `
                color: var(--text);
                background: var(--offShade);
                border: none ;

                :hover{
                    color: var(--offWhite);
                    background: var(--offShade);
                }
            `
        }
    }}
`