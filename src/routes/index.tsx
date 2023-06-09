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
            path: '/game1',
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
            path: '/game1-fase2',
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