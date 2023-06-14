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

            <div style={{
                    color:'white',
                    fontSize:40,
                    marginTop:50,
                    fontWeight:500,
                    textAlign:'center',
                    top: 250,        
                    position:'absolute'
            }}>RECYCLING</div>

            <div style={{
                    color:'white',
                    fontSize:30,
                    marginTop:50,
                    fontWeight:500,
                    textAlign:'center',
                    top: 310,        
                    position:'absolute'
            }}>THE ENVIRONMENTAL ADVENTURE</div>

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
