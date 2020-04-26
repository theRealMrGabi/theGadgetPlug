import styled from 'styled-components';
import { mediaQueries } from '../../AppGlobalStyle';

const SignInContainer = styled.div `
    margin: 0.5rem auto;
    padding: 0.5rem auto;
    width: 100%;
    
    .button{
        padding: 0.7rem;
    }

    ${mediaQueries("mobileLarge")`
        input{
            width: 90%;
        }

        .button{
            padding: 0.5rem 0.2rem; 
        }
    `}  
    
    ${mediaQueries("mobileMedium")`
        input{
            width: 90%;
        }

        .button{
            padding: 0.5rem 0.2rem; 
        }
    `}

    ${mediaQueries("mobileSmall")`
        input{
            width: 90%;
        }

        .button{
            padding: 0.5rem 0.2rem; 
        }
    `}
    
`

export default SignInContainer ;