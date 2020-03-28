import styled from 'styled-components';

const NavContainer = styled.nav`
    background-color: var(--mainBlue) !important;
    height: 3.5rem !important;

    .navigation{
      @media screen and (max-width: 580px) {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-content: center;
      width: 150px;
      margin-bottom: 3rem;
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
  }

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
`

export default NavContainer