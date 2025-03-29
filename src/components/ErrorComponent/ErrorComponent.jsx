import React from 'react'
import { useRouteError } from 'react-router-dom'


const ErrorComponent = () => {

    const error = useRouteError();
    console.log(error);
    
    return (
        <div>
            <h1>{error.status} - Not Found</h1>
            <p>{error?.data}</p>
            <button>Go Back?</button>
        </div>
    )
}

export default ErrorComponent