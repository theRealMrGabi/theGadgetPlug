import React from 'react';
import { SpinnerOverlay, SpinnerContainer} from './loading-spinner.styles';

const LoadingSpinner = WrappedComponent => {
    const spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) :
            (
                <WrappedComponent {...otherProps} />
            )
    };
    return spinner ;
};

export default LoadingSpinner ;