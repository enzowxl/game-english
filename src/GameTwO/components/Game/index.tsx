import React from 'react';
import BackGround from './Background';
import Debugger from './Debug';
import Counter from './Counter/Counter';

export default  function Game() {

    return (
        <div>  

            {/*<Debugger/>*/}

            <Counter/>

            <BackGround/>
            
        </div>
    );
}