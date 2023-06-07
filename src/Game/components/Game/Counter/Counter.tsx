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
            alignItems: 'center',
            backgroundColor:'white',
            padding:10,
            borderRadius:10
          }}>
            <div style={{
              color: 'black',
              fontSize: 20,
              fontWeight:400
            }}>
              Steps: {steps}
            </div>
      
            <button style={{
              color: 'black',
              fontSize: 20,
              fontWeight:500,
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