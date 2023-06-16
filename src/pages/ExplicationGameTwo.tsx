import React from 'react';
import '../styles/App.css'

import ExplicationGameTwoComponent from '../Explication/ExplicationGameTwo';

export default function ExplicationGameTwo() {


    return (
        
        <div className="Explication" style={{
            backgroundColor: 'black' //'#372713'
          }}>

            <div style={{
                width:960,
                height:960
            }}>

                <ExplicationGameTwoComponent/>
                

            </div>
            
        </div>
    );
}