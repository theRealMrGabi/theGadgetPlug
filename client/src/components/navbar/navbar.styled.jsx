import styled from 'styled-components';
import { maxMediaQueries } from '../../AppGlobalStyle';

const NavContainer = styled.nav`
    background-color: var(--mainBlue) !important;
    height: 3.5rem !important;
    
    .nav-link{
        color: var(--persianGreen) !important;
        font-size: 1.3rem;
        text-transform: capitalize;

        :hover{
            color: var(--altBlue) !important;
        }

    }
    .sign-out{
        cursor: pointer;
    }

    .navbar-nav{
        margin: 0 2rem;
    }

    ${maxMediaQueries("mobileLarge")`
        position: relative;
        top: 0;
        margin: 0;
        padding: 0;

        .navigation{
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-content: center;
            width: 150px;
            margin-bottom: 3rem;

            .logo-brand{
                position: absolute;
                left: 11.5rem;
                top: 0.2rem;
            }

            .navbar-toggler{
                outline: none !important;
                color: var(--richBlack);
                position: absolute;
                left: 1rem;
                top: 0.5rem;

                .navbar-toggler-icon{
                    color: black !important;
                    background: var(--altBlue);

                    i{
                        margin: 0.3rem auto ;
                    }
                }
            }
        }

        .navbar-collapse{
            padding: 2rem 2rem !important;
            background-color: var(--mainBlue) !important;
        }

        #cart-icon{
            position: absolute;
            top: 0.4rem;
            right: 0rem;
        }
    `}
`

export default NavContainer ;