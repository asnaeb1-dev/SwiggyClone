import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from "./../../App";
import AboutPage from "../AboutPage/AboutPage"
import ContactUsPage from "../ContactPage/ContactUsPage";
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import Body from '../Body';
import RestaurantMenu from '../RestaurantMenu/RestaurantMenu';
const Router = () => {

    const router = createBrowserRouter([{
        path: '/',
        element: <App />,
        errorElement: <ErrorComponent />,
        children: [
            { path: "/", element: <Body />},
            { path: '/about', element: <AboutPage /> },
            { path: '/contactus', element: <ContactUsPage /> },
            { path: '/city/:cityName/:resId', element: <RestaurantMenu />}
        ]
    }]);
    
    return <RouterProvider router={router}/>;
}

export default Router