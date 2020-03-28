import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo1 from '../../assets/closed_macbook.jpg';
import logo2 from '../../assets/computer.jpg';
import logo3 from '../../assets/iphone_held.jpg';

const Carousel = () => {
    return (
        <CarouselContainer id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="5000" >
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active" >
                    <img src={logo1} className='d-block w-100 img-fluid' alt="" />
                    <div className="carousel-caption carousel-text  text-center">
                        <h1>Apple</h1>
                        <Link to='/shop' className="btn btn-outline-light btn-lg link-test">SHOP NOW</Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={logo2} className='d-block img-fluid w-100' alt="" />
                    <div className="carousel-caption carousel-text text-center">
                        <h1>Laptop</h1>
                        <Link to='/shop' className="btn btn-outline-light btn-lg link-test">SHOP NOW</Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={logo3} className='d-block img-fluid w-100' alt="" />
                    <div className="carousel-caption carousel-text text-center">
                        <h1>iPhone</h1>
                        <Link to='/shop' className="btn btn-outline-light btn-lg link-test">SHOP NOW</Link>
                    </div>
                </div>
            </div>
            <Link className="carousel-control-prev" to="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                <span className="sr-only">Previous</span>
            </Link>
            <Link className="carousel-control-next" to="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </Link>
        </CarouselContainer>
    )
}

export default Carousel

const CarouselContainer = styled.div `

    width: 100vw;
    padding-right: 2px !important;

    @media screen and (max-width: 580px) {
          ${'' /* width: 100vw; */}
          height: 100%;
      }

    .carousel-item{

        .carousel-text{
            color: var(--mainBlue) ;
            position: absolute;
            top: 40%;
            right: 20%;

            .link-test{
                color: var(--darkCyan) !important;
                font-size: 2rem;
                font-weight: bold;
            }
        }
    }
`