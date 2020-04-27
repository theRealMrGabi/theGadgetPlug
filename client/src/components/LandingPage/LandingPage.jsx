import React from 'react';
import LandingContainer from './LandingPage.styles';
import {ButtonContainer} from '../button/button';

const LandingPage = () => {
    return (
        <LandingContainer>
            <div className="container-fluid">
                <div className="row">
                    <div className="img-holder">
                        <img src="https://res.cloudinary.com/gabirated/image/upload/v1587982236/thegadgetplug%20E-commerce/homepage%20images/landing_vnpmyj.png" 
                            className="img-fluid" 
                            alt="landing-img" 
                        />

                        <div className="text-holder">
                            <div className="text-content">
                                <span className="d-none d-sm-block"><i className="material-icons white-text">beenhere</i> Competitive price</span>
                                <span><i className="material-icons white-text">beenhere</i> Shop comfortably with ease</span> <br/>
                                <span><i className="material-icons white-text">beenhere</i> Shop securely</span> <br/>
                                <span><i className="material-icons white-text">beenhere</i> Wide range of products</span> <br/>
                                <span className="d-none d-sm-block"><i className="material-icons white-text">beenhere</i> Amazing discount</span> <br/>
                            </div>
                            <div className="button-holder">
                                <ButtonContainer landing className="font-weight-bold">EXPLORE NOW</ButtonContainer>
                            </div>
                        </div>
                    </div>

                    <h3 className="trending text-center font-weight-bold"><i className="material-icons">whatshot</i> Product of The Week</h3>

                    <div className="product-holder">
                        <img src="https://res.cloudinary.com/gabirated/image/upload/v1587982243/thegadgetplug%20E-commerce/homepage%20images/mac_dryazn.jpg" 
                            alt="mac" 
                            className="img-fluid"
                        />

                        <div className="product-text-holder">
                            <div className="product-text">
                                <span><i className="material-icons white-text">done</i> excellent battery life</span> <br />
                                <span><i className="material-icons white-text">done</i> powerful performance</span> <br />
                                <span><i className="material-icons white-text">done</i> thin and light design</span> <br />
                                <span><i className="material-icons white-text">done</i> bright and colorful display</span> <br />
                                <span className="d-none d-sm-block"><i className="material-icons white-text">done</i> convenient touch id</span> <br />
                            </div>
                            <div className="product-btn">
                                <ButtonContainer landing className="font-weight-bold" >SHOP NOW</ButtonContainer>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </LandingContainer>
    )
}

export default LandingPage ;