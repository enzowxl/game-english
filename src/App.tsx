import React from 'react';

import Routes from './routes/index';

import { isBrowser, isMobile } from 'react-device-detect'

function App() {

  if(isBrowser){
    
    return (

      <>

        <Routes/>

      </>

  );
  }else if(isMobile){

    return(

      <>
      
        <div 
        style={{
          fontWeight:600,
          color:'white',
          fontSize:30
        }}
        className='App'>
          {'Content only available on computer'.toUpperCase()}
        </div>

      </>

    )

  }



}

export default App;