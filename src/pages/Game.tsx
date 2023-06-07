import React, { useContext } from 'react';
import '../styles/App.css';

import { 
  GAME_SIZE 
} from '../Game/constants/constants';

import CanvasProvider from '../Game/contexts/canvas';

import Game from '../Game/components/Game/index';
import PaperProvider from '../Game/contexts/papers';
import BananaProvider from '../Game/contexts/banana';
import StepsProvider from '../Game/contexts/steps';


function GameScreen() {


  return (

    <div className="App">

      <div 
      style={{
        position:'relative',
        width: GAME_SIZE,
        height: GAME_SIZE,
      }}
      >

        <CanvasProvider>

          <PaperProvider>

            <BananaProvider>

              <StepsProvider>

                <Game/>

              </StepsProvider>

            </BananaProvider>

          </PaperProvider>

        </CanvasProvider>

      </div>
      
    </div>

  );
}

export default GameScreen;
