import React, { Component } from 'react';
import error404 from '../../assets/error404.png'
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl={error404} />
                    <ErrorImageText>Sorry, this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary;