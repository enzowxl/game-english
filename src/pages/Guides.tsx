import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GuidesScreen() {

    const navigate = useNavigate()

    return (
        <div className="App" style= {{
                backgroundColor:'black'
        }}>

            <div style={{
                position:'relative',
                width:960,
                height:960,
                top:150
            }}>

                <img
                src='./assets/teclado.png'
                alt=''
                style={{
                    width:200,
                    marginTop:50
                }}
                />

                <div
                style={{
                    color:'white',
                    fontSize:20,
                    marginTop:50,
                    fontWeight:500,
                    textAlign:'center'
                }}
                >At the beginning of the game you will receive 3 lives and during the game you will have 3 chances if you lose the 3 lives you lose, and go back to the first level, and at the end of the game you will receive a surprise reward.</div>
                
                <div
                style={{
                    color:'white',
                    fontSize:20,
                    marginTop:50,
                    fontWeight:500,
                    textAlign:'center'
                }}
                >Be careful with the traps that you will have during the 3 levels, each level will have a different trap that you need to avoid to not die and return to the beginning.</div>

                <button
                onClick={() => {
                    navigate('/')
                }}
                style={{
                    marginTop:50,
                    backgroundColor: 'white',
                    width: 120,
                    height: 82,
                    borderRadius: 100,
                    fontWeight: '600',
                    color: '#372713',
                    fontSize: 20,
                    zIndex: 200,
                    borderWidth: 0,
                    padding: 5

                }}
            >BACK</button>


            </div>
            
        </div>
    );
}