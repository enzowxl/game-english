import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DeadScreen() {

    const navigate = useNavigate()

    return (
        <div className="App" style= {{
                backgroundColor:'red'
        }}>

            <div style={{
                position:'relative',
                width:960,
                height:960
            }}>

            <div
            style={{
                color:'white',
                fontSize:100,
                marginTop:300,
                fontWeight:500,
                textAlign:'center',
            }}
            >GAME OVER, LOSER</div>

            <button
                    onClick={() => {
                        navigate('/')
                    }}
                    style={{
                        backgroundColor: 'white',
                        width: 482,
                        height: 82,
                        borderRadius:100,
                        marginTop:50,
                        fontWeight:'600',
                        color:'red',
                        fontSize:20,
                        borderWidth:0
                    }}
                    >BACK TO HOME</button>
                

            </div>
            
        </div>
    );
}