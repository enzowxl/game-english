import React, { useContext } from 'react';


import { LifeContexts } from '../../../../context/Life';

function Counter() {

    function ComponentLife() {

      const Lifes = window.localStorage.getItem('@lifes')

      if(Lifes === '3'){

        return(

          <>
              <div
              style={{
                backgroundImage: `url(./assets/heart.png)`,
                width:25,
                height:25,
                marginRight:5,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'contain'
              }}
              />
              <div
              style={{
                backgroundImage: `url(./assets/heart.png)`,
                width:25,
                height:25,
                marginRight:5,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'contain'
              }}
              />
              <div
              style={{
                backgroundImage: `url(./assets/heart.png)`,
                width:25,
                height:25,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'contain'
              }}
              />
          </>
          
        )

      }else if(Lifes === '2'){

        return(

          <>
              <div
              style={{
                backgroundImage: `url(./assets/heart.png)`,
                width:25,
                height:25,
                marginRight:5,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'contain'
              }}
              />
              <div
              style={{
                backgroundImage: `url(./assets/heart.png)`,
                width:25,
                height:25,
                marginRight:5,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'contain'
              }}
              />
              <div
              style={{
                backgroundImage: `url(./assets/cracked_heart.png)`,
                width:25,
                height:25,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'contain'
              }}
              />
          </>
          
        )

      }else if(Lifes === '1'){

        return(

          <>
              <div
              style={{
                backgroundImage: `url(./assets/heart.png)`,
                width:25,
                height:25,
                marginRight:5,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'contain'
              }}
              />
              <div
              style={{
                backgroundImage: `url(./assets/cracked_heart.png)`,
                width:25,
                height:25,
                marginRight:5,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'contain'
              }}
              />
              <div
              style={{
                backgroundImage: `url(./assets/cracked_heart.png)`,
                width:25,
                height:25,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'contain'
              }}
              />
          </>
          
        )

      }
      
    }


    return (
        <div style={{
            position: 'absolute',
            top: 20,
            left: 30,
            display: 'flex',
            backgroundColor:'#899c9e',
            padding:10,
            borderRadius:5,

          }}>

              <ComponentLife/>

          </div>
    );
}

export default Counter;