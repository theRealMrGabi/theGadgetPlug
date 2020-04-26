import styled from 'styled-components';
import { mediaQueries} from '../../AppGlobalStyle';

const SignUpContainer = styled.div `
    margin: 0.5rem auto;
    padding: 0.5rem auto;
    width: 100%;

    ${mediaQueries("mobileLarge")`
        input{
            width: 93%;
        }

        .button{
            margin: 1rem;
        }
    `}

    ${mediaQueries("mobileMedium")`
        input{
            width: 93%;
        }

        .button{
            margin: 1rem;
        }
    `}

    ${mediaQueries("mobileSmall")`
        input{
            width: 93%;
        }

        .button{
            margin: 1rem;
        }
    `}
    }
`

export default SignUpContainer ;