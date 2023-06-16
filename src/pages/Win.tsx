import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DeadScreen() {

    const navigate = useNavigate()

    const arr = [
        'Candy',
        'Chocolate',
        'Bubble gum',
        'Lollipop'
    ]

    const randomElement = arr[Math.floor(Math.random() * arr.length)];

    return (
        <div className="App" style= {{
                backgroundColor:'gold'
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
            >YOU WIN</div>

            <div
            style={{
                color:'white',
                fontSize:40,
                fontWeight:500,
                textAlign:'center',
            }}
            >You won a {randomElement}</div>

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
                        color:'gold',
                        fontSize:20,
                        borderWidth:0
                    }}
                    >BACK TO HOME</button>
                

            </div>
            
        </div>
    );
}