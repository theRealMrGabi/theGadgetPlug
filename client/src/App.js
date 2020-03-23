import React, { useEffect , lazy, Suspense } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.action';
import './index.scss';
import Spinner from './components/spinner/spinner.component';
import Navbar from './components/navbar/navbar';
import ErrorBoundary from './components/error-boundary/error-boundary';

const Homepage = lazy(() => import('./components/homepage/homepage'))
const SignUpSignIn = lazy(() => import('./components/sign-up-and-sign-in/sign-up-and-sign-in'));
const Iphone = lazy(() => import('./pages/iPhone'));
const Android = lazy(() => import('./pages/Android'));
const Laptop = lazy(() => import('./pages/Laptop'));
const SmartWatch = lazy(() => import('./pages/Smartwatch'));
const Games = lazy(() => import('./pages/Games'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Shop = lazy(() => import('./components/shop/shop'));

const App = ({ checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner/>}>
              <Route exact path='/' component={Homepage} />
              <Route path='/shop' component={Shop} />

              <Route path='/shop/laptop' component={Laptop} />
              <Route path='/shop/iphone' component={Iphone} />
              <Route path='/shop/android' component={Android} />
              <Route path='/shop/smartwatch' component={SmartWatch} />
              <Route path='/shop/games' component={Games} />

              <Route path='/signin' render={() => currentUser ? (< Redirect to='/shop' />) : (< SignUpSignIn />)} />
              <Route path='/checkout' component={Checkout} />
            </Suspense>
          </ErrorBoundary>
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