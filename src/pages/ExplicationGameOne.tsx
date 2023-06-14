import React from 'react';
import '../styles/App.css'

import ExplicationGameOneComponent from '../Explication/ExplicationGameOne/index';

export default function ExplicationGameOne() {
    return (
        
        <div className="App" style={{
            backgroundColor: 'black'
          }}>

            <div style={{
                position:'relative',
                width:960,
                height:960
            }}>

                <ExplicationGameOneComponent/>

            </div>
            
        </div>
    );
}