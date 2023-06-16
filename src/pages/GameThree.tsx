import React, { useContext, useEffect } from 'react';
import '../styles/App.css';

import { 
  GAME_SIZE 
} from '../GameThree/constants/constants';

import CanvasProvider from '../GameThree/contexts/canvas';

import Game from '../GameThree/components/Game/index';
import StepsProvider from '../GameThree/contexts/steps';
import Guides from '../GameThree/components/Game/Guides';
import { LifeContexts } from '../context/Life';
import QuestionsProvider from '../GameThree/contexts/questions';

function GameScreen() {


  return (

    <div className="App" style={{
      backgroundColor: '#004114'
    }}>



        <CanvasProvider>

              <StepsProvider>

                <QuestionsProvider>

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

                </QuestionsProvider>

              </StepsProvider>

        </CanvasProvider>

    </div>

  );
}

export default GameScreen;
