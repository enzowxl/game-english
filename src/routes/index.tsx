import React from 'react';

import GameScreen from '../pages/Game';
import Home from '../pages/Home';
import Dead from '../pages/Dead';

import { 
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import GameTwO from '../pages/GameTwO';



function Routes() {

    const router = createBrowserRouter([
        {
            path: '/game',
            element: <GameScreen/>
        },
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/dead',
            element: <Dead/>
        },
        {
            path: '/gameTwO',
            element: <GameTwO/>
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