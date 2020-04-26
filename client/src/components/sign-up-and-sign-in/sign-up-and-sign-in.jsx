import React from 'react'
import SignUp from '../sign-up/Sign-up'
import SignUpSignInStyles from './sign-up-and-sign-in.styles'
import SignIn from '../sign-in/sign-in'

const SignUpSignIn = () => {
    return (
        <SignUpSignInStyles>
            <SignIn />
            <SignUp />
        </SignUpSignInStyles>
    )
}

export default SignUpSignIn ;