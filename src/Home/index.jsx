import React from 'react';

import Image from './components/Image';
import Buttons from './components/Buttons';

import { useNavigate } from 'react-router-dom';

export default function Home() {

    const n = useNavigate()

    function navigateGame() {

        n('/game/explication')
        window.localStorage.setItem('@lifes', 3)
        
    }

    function navigateInformation() {

        n('/guides')
        
    }

    return (
        <div className="App" style={{
            backgroundColor:'black'
        }}>

            <Image/>

            <Buttons
            name={'START THE GAME'}
            func={navigateGame}
            top={450}
            />

            <Buttons
            name={'GUIDES'}
            func={navigateInformation}
            top={600}
            />
            
        </div>
    );
}
