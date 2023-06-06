import React from 'react';
import './App.css';

import { 
  GAME_SIZE 
} from '../constants/constants';

import CanvasProvider from '../contexts/canvas';

import Game from './Game';
import PaperProvider from '../contexts/papers';
import BananaProvider from '../contexts/banana';


function App() {

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

              <Game/>

            </BananaProvider>

          </PaperProvider>

        </CanvasProvider>

      </div>
      
    </div>

  );
}

export default App;
