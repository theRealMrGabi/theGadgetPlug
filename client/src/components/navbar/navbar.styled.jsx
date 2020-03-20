import styled from 'styled-components';

const NavContainer = styled.nav`
    background-color: var(--mainBlue) !important;
    height: 3.5rem !important;
    margin: 0px 0px !important;
    padding: 0px 0px !important;

        .nav-link{
            color: var(--persianGreen) !important;
            font-size: 1.3rem;
            text-transform: capitalize;

            :hover{
                color: var(--altBlue) !important;
            }
        }
        .navbar-toggler{
            outline: none !important;
            color: var(--richBlack);
            
        .navbar-toggler-icon{
            color: black !important;
            background: var(--altBlue);

            i{
                margin: 0.3rem auto ;
            }
        }

        }
        .sign-out{
            cursor: pointer;
        }
`

export default NavContainer