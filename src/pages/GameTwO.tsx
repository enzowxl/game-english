import React, { useContext, useEffect } from 'react';
import '../styles/App.css';

import { 
  GAME_SIZE 
} from '../GameTwO/constants/constants';

import CanvasProvider from '../GameTwO/contexts/canvas';
import BottleProvider from '../GameTwO/contexts/bottle'

import Game from '../GameTwO/components/Game/index';
import StepsProvider from '../GameTwO/contexts/steps';
import Guides from '../GameTwO/components/Game/Guides';
import ShakeProvider from '../GameTwO/contexts/shake';
import { LifeContexts } from '../context/Life';


function GameTwOScreen() {

  /*const lifeContext = useContext(LifeContexts)

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
      lifeContext.updateLifes()
    };
  
    window.addEventListener('beforeunload', handleBeforeUnload);
  
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);*/


  return (

    <div className="App" style={{
      backgroundColor: '#0c3040'
    }}>



        <CanvasProvider>

              {/*<StepsProvider>*/}

                <BottleProvider>

                  <ShakeProvider>

                        <Guides/>

                          <div 
                          style={{
                            position:'relative',
                            width: GAME_SIZE,
                            height: GAME_SIZE,
                          }}
                          >                

                            <Game/>

                          </div>

                    </ShakeProvider>

                  </BottleProvider>

              {/*</StepsProvider>*/}

        </CanvasProvider>
      
    </div>

  );
}

export default GameTwOScreen;
