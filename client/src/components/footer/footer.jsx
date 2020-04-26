import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <FooterContainer className="row justify-content-center">
            <div className="col-md-5 text-center">
                <img src={logo} alt="footer icon"/>

                <br/>

                <div>
                    <a className="footer-link" href="https://www.github.com/theRealMrGabi" target="_blank" rel="noopener noreferrer"> <i className="fab font-icons fa-github"></i> </a>
                    <a href="https://linkedin.com/in/ibrahimadegabi" target="_blank" className="footer-link" rel="noopener noreferrer"> <i className="fab font-icons fa-linkedin"></i> </a>
                    <a href="https://twitter.com/theRealMrGabi" target="_blank" className="footer-link" rel="noopener noreferrer"> <i className="fab font-icons fa-twitter-square"></i> </a>
                </div>

                <hr/>
                    <div className="brand-name">
                        frontHut Concepts &copy;
                    </div>
            </div>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div `
    color: white;
    background-color: var(--richBlack);
    height: 10rem;
    margin: 30rem 0;
      
      ${'' /* @media screen and (max-width: 800px) {
          width: 100vw;
          height: 55vh;
          margin: 0px !important;
          padding: 0px !important;
      } */}

    img{
        height: 3rem;
        margin: 1rem 0;
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
`