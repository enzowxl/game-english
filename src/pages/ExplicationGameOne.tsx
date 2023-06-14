import React from 'react';
import '../styles/App.css'

import ExplicationGameOneComponent from '../Explication/ExplicationGameOne/index';

export default function ExplicationGameOne() {


    return (
        
        <div className="Explication" style={{
            backgroundColor: 'black' //'#372713'
          }}>

            <div style={{
                width:960,
                height:960
            }}>

                <ExplicationGameOneComponent
                />

            </div>
            
        </div>
    );
}