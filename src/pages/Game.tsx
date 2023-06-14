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
import GlassProvider from '../Game/contexts/glass';
import PlasticProvider from '../Game/contexts/plastic'
import MetalProvider from '../Game/contexts/metal';
import Guides from '../Game/components/Game/Guides';

function GameScreen() {


  return (

    <div className="App" style={{
      backgroundColor: '#372713'
    }}>



        <CanvasProvider>

          <PaperProvider>

            <BananaProvider>

              <StepsProvider>

                <GlassProvider>

                  <PlasticProvider>

                    <MetalProvider>

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

                    </MetalProvider>

                  </PlasticProvider>

                </GlassProvider>

              </StepsProvider>

            </BananaProvider>

          </PaperProvider>

        </CanvasProvider>

    </div>

  );
}

export default GameScreen;
