import React from 'react';

import Image from './components/Image';
import Buttons from './components/Buttons';

import { useNavigate } from 'react-router-dom';

export default function Home() {

    const n = useNavigate()

    function navigateGame() {

        n('/game')
        
    }

    function navigateInformation() {

        //n('/information')
        
    }

    return (
        <div className='App'>

            <Image/>

            <Buttons
            name={'START THE GAME'}
            func={navigateGame}
            top={450}
            />

            <Buttons
            name={'INFORMATION'}
            func={navigateInformation}
            top={600}
            />
            
        </div>
    );
}
