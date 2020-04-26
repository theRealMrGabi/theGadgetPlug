import styled from 'styled-components';
import { maxMediaQueries } from '../../AppGlobalStyle';

const SignUpSignInStyles = styled.div `
    margin: 5rem 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px , 1fr));
    gap: 2rem;

    ${maxMediaQueries("mobileLarge")`
        margin: 1.5rem 2rem;
    `}
`;

export default SignUpSignInStyles ;