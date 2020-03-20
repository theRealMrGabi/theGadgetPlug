import React, { useEffect } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import Navbar from './components/navbar/navbar';
import Homepage from './components/homepage/homepage';
import SignUpSignIn from './components/sign-up-and-sign-in/sign-up-and-sign-in';

import Iphone from './pages/iPhone';
import Android from './pages/Android';
import Laptop from './pages/Laptop';
// import Default from './pages/Default';
import SmartWatch from './pages/Smartwatch';
import Games from './pages/Games';
import Checkout from './pages/Checkout';

import './index.scss';
import Shop from './components/shop/shop';
import { checkUserSession } from './redux/user/user.action';

const App = ({ checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />

          <Route path='/shop/laptop' component={Laptop} />
          <Route path='/shop/iphone' component={Iphone} />
          <Route path='/shop/android' component={Android} />
          <Route path='/shop/smartwatch' component={SmartWatch} />
          <Route path='/shop/games' component={Games} />

          <Route path='/signin' render={() => currentUser ? (< Redirect to='/shop' />) : (< SignUpSignIn />)}  />
          <Route path='/checkout' component={Checkout} />
          {/* <Route component={Default} /> */}
        </Switch>
      </React.Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps) (App)