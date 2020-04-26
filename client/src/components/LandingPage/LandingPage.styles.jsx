import styled from 'styled-components';
import { mediaQueries, maxMediaQueries } from '../../AppGlobalStyle';

const LandingContainer = styled.div `

    position: relative;

    .img-holder{
        position: relative;

        .text-holder{

            .text-content{
                position: absolute;
                font-size: 2rem;
                text-transform: capitalize;
                font-weight: bold;
                margin: 5rem 5rem;
                padding: 2rem 1rem;
                
                top: 7rem;
                left: 7rem;
                color: var(--offShade);
            }

            .button-holder{
                position: absolute;
                right: 5rem;
                bottom: 2rem;
            }
        }
    }

    .trending{
        color: var(--mainBlue);
        padding: 0.5rem 20rem;
    }

    .product-holder{
        position: relative;

        .product-text-holder{
            .product-text{
                position: absolute;
                font-size: 2rem;
                text-transform: capitalize;
                font-weight: bold;
                bottom: 2rem;
                left: 1rem;
                color: white;
            }

            .product-btn{
                position: absolute;
                bottom: 2rem;
                right: 1rem;

            }
        }
    }

    ${mediaQueries("tablet")`
        .trending{
            padding: 0 5rem;
        }

    `}

    ${maxMediaQueries("mobileLarge")`
        .img-holder{
            .text-holder{
                .text-content{
                    font-size: 1rem;
                    top: 1rem !important;
                    left: 1rem !important;
                    margin: 0 !important;
                    padding: 1rem !important;
                }

                .button-holder{
                    position: absolute;
                    right: 5rem;
                    bottom: 0.5rem;
                }
            }
        }

        .trending{
            padding: 0;
        }

        .product-holder{

            .product-text-holder{

                .product-text{
                    font-size: 1rem;
                    top: 1rem;
                }

                .product-btn{
                    bottom: 1rem;
                    right: 5rem;

                }
            }
        }
    `}

`;

export default LandingContainer ;