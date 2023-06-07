import React from 'react';

import GameScreen from '../pages/Game';
import Home from '../pages/Home';

import { 
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';


function Routes() {

    const router = createBrowserRouter([
        {
            path: '/game',
            element: <GameScreen/>
        },
        {
            path: '/',
            element: <Home/>
        }
    ])
    
    return (

        <>
        
            <RouterProvider
            router={router}
            />

        </>

    );
}

export default Routes;