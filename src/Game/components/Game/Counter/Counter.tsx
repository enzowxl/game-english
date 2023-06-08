import React, { useContext } from 'react';

import { StepsContexts } from '../../../contexts/steps';

function Counter() {

    const { steps } = useContext(StepsContexts)

    return (
        <div style={{
            position: 'absolute',
            top: 20,
            left: 30,
            display: 'flex',
            backgroundColor:'#bb9362',
            padding:10,
            borderRadius:10,

          }}>
            <div style={{
              color: 'white',
              fontSize: 20,
              fontWeight:600,
            
            }}>
              STEPS - {steps}
            </div>
      
            <button style={{
              color: 'white',
              fontSize: 20,
              fontWeight:600,
              marginLeft: 16,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
      
            }} onClick={() => {
                window.location.reload()
            }}>⟳</button>
          </div>
    );
}

export default Counter;