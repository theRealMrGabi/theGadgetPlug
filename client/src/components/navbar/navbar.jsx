import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import NavContainer from './navbar.styled';
import logo from '../../assets/logo.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.action';


const Navbar = ({ hidden, currentUser, signOutStart }) => {
    return (
        <NavContainer className="navbar fixed-top navbar-expand-sm">
            <div className="navigation">
                <Link to='/'>
                    <img src={logo} alt="" className="navbar-brand" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobileNav">
                    <span className="navbar-toggler-icon">
                        <i className="fas fa-bars"></i>
                    </span>
                </button>

            </div>

            <div className="collapse navbar-collapse" id="mobileNav">
                <ul className="navbar-nav mx-auto mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" href="#shop" to='/shop'>Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#laptop" to='/shop/laptop'>Laptop</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#iphone" to='/shop/iphone'>iPhone</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#android" to='/shop/android'>Android</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#iphone" to='/shop/smartwatch'>Smartwatch</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#iphone" to='/shop/games'>Games</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    {
                        currentUser ?
                            <li className="nav-item">
                                <div className="nav-link sign-out" onClick={() => signOutStart()}>SIGN OUT</div>
                            </li>
                            :
                            <li className="nav-item">
                                <Link className="nav-link" to='/signin'>SIGN IN</Link>
                            </li>
                    }
                    <CartIcon />
                </ul>
                {hidden ? null : <CartDropdown />}
            </div>
        </NavContainer>

    )
}

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);