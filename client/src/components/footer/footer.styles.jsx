import styled from 'styled-components';

const FooterContainer = styled.div`
    color: white;
    background-color: var(--richBlack);
    height: 11rem;
    margin: 0.1rem;

    img{
        height: 3rem;
        margin: 1rem 0;
    }

    h3{
        color: var(--persianGreen);
    }

    .footer-link{
        color: var(--offWhite);
        text-decoration: none;

        .font-icons{
        font-size: 2rem;
        padding: 0 0.5rem;
        margin: 1.2rem .5rem 0 0;
        }
    }

    .brand-name{
        font-size: 1.6rem;
    }
`;

export default FooterContainer ;