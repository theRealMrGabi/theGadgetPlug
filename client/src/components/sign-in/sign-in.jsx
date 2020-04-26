import React, { useState } from 'react'
import SignInContainer from './sign-in.styles'
import { ButtonContainer } from '../button/button';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';
import {connect} from 'react-redux';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setuserCredentials] = useState({email: '' , password: ''}) ;
    const { email, password } = userCredentials ;

    const handleChange = e => {
        const {name, value} = e.target;
       setuserCredentials({
           ...userCredentials,
            [name] : value 
        });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        emailSignInStart(email , password)
    }
    
    return (
        <SignInContainer>
            <div className="title text-capitalize">
                <h3>i already have an account</h3>
                <span>sign in with your email and password</span>
            </div>

            <br/>

            <form onSubmit={handleSubmit} className="text-capitalize" >
                <label htmlFor="email">email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="email address"
                    value={email}
                    onChange={handleChange}
                    required
                    className="form-control"
                />

                <label htmlFor="password">password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={handleChange}
                    required
                    className="form-control"
                />

                <div className="button justify-content-around">
                    <ButtonContainer tertiary type="submit" >Sign in with Email</ButtonContainer>
                    <ButtonContainer
                        type="button" google onClick={() => googleSignInStart()} >Sign in with Google</ButtonContainer>
                </div>
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email , password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps) (SignIn) ;