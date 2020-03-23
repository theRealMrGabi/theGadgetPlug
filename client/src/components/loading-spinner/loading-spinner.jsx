import React from 'react';
import Spinner from '../spinner/spinner.component';

const LoadingSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (<Spinner />) : ( <WrappedComponent {...otherProps} />)
};
// return spinner 

export default LoadingSpinner ;