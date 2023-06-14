import GameScreen from '../pages/Game';
import Home from '../pages/Home';
import Dead from '../pages/Dead';
import GameTwO from '../pages/GameTwO';
import ExplicationGameOne from '../pages/ExplicationGameOne';
import ExplicationGameTwo from '../pages/ExplicationGameTwo';
import GuidesScreen from '../pages/Guides';
import GameThree from '../pages/GameThree';
import ExplicationGameThree from '../pages/ExplicationGameThree';
import Win from '../pages/Win';

import LifesProvider from '../context/Life';

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';


function Routes() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <LifesProvider><Home /></LifesProvider>
        },
        {
            path: '/guides',
            element: <LifesProvider><GuidesScreen /></LifesProvider>
        },

        {
            path: '/game',
            element: <LifesProvider><GameScreen /></LifesProvider>
        },
        {
            path: '/game/explication',
            element: <LifesProvider><ExplicationGameOne /></LifesProvider>
        },

        {
            path: '/game-2',
            element: <LifesProvider><GameTwO /></LifesProvider>
        },
        {
            path: '/game-2/explication',
            element: <LifesProvider><ExplicationGameTwo /></LifesProvider>
        },

        {
            path: '/game-3',
            element: <LifesProvider><GameThree /></LifesProvider>
        },
        {
            path: '/game-3/explication',
            element: <LifesProvider><ExplicationGameThree /></LifesProvider>
        },

        {
            path: '/win',
            element: <LifesProvider><Win/></LifesProvider>
        }

        ,
        {
            path: '/dead',
            element: <LifesProvider><Dead /></LifesProvider>
        },
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