import React from 'react';
import logo from '../../assets/logo.svg';
import FooterContainer from './footer.styles';

const Footer = () => {
    return (
        <FooterContainer className="row justify-content-center">
            <div className="col-md-5 text-center">
                <img src={logo} alt="footer icon"/>

                {' '}
                <h3 className="font-weight-bold">theRealMrGabi&copy; </h3>

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

export default Footer ;