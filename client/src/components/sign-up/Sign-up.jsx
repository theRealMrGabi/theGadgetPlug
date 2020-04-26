import React, { useState } from 'react';
import {connect} from 'react-redux';
import { ButtonContainer } from '../button/button';
import SignUpContainer from './sign-up.styles';
import { signUpStart } from '../../redux/user/user.action';

const SignUp = ({ signUpStart }) => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleChange = e =>{
        const {name, value} = e.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value
        });
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(password !== confirmPassword){
            alert('password do not match');
            return;
        }

        signUpStart({ displayName, email, password});
    }

    return (
        <SignUpContainer>
            <div className="title text-capitalize">
                <h3>I dont have an account ? </h3>
                <span>sign up with your email and password</span>
            </div>

            <br />

            <form onSubmit={handleSubmit} className="text-capitalize">
                <label htmlFor="displayName">display Name</label>
                <input type="text" 
                    className="form-control" 
                    name="displayName" 
                    value={displayName} 
                    required 
                    onChange={handleChange} 
                    placeholder="Display Name"
                />

                <label htmlFor="email">Email</label>
                <input type="email" 
                    className="form-control" 
                    name="email" 
                    value={email} 
                    required 
                    onChange={handleChange} 
                    placeholder="email"
                />

                <label htmlFor="password">password</label>
                <input type="password" 
                    className="form-control" 
                    name="password" 
                    value={password} 
                    required 
                    onChange={handleChange} 
                    placeholder="password"
                />

                <label htmlFor="confirmPassword">confirm password</label>
                <input type="password" 
                    className="form-control" 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    required 
                    onChange={handleChange} 
                    placeholder="confirm password"
                />

                <div className="button justify-content-around">
                    <ButtonContainer tertiary onSubmit={handleSubmit} >Sign up with email</ButtonContainer>
                </div>

            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps) (SignUp) ;