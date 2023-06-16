import React, { useContext, useState } from 'react';
import './style.css'
import { LifeContexts } from '../../../../context/Life';
import { QuestionsContexts } from '../../../contexts/questions';
import { useNavigate } from 'react-router-dom';

function Modal({
    modalVisible,
    setModalVisible
}) {

    const navigate = useNavigate()

    const lifesContext = useContext(LifeContexts)
    const questionContext = useContext(QuestionsContexts)

    function No() {

        questionContext.updateQuestions()
        lifesContext.updateLifes()

    }

    function Ok() {

        setModalVisible(!modalVisible)
        questionContext.complete()
        setTimeout(() => {
            navigate('/win')
        }, 2000)
        
    }

    return (

        <div className='modal'>

            <div
            style={{
                padding:15,
                fontSize:25,
                fontWeight:'700',
                textAlign:'center',
                color:'white',
                margin:20,
                height:30,
                backgroundSize:'contain'
            }}
            >Yeah! That helped a lot! How should we reforest now?</div>

            <div className='buttons'>

            <button
            onClick={Ok}
             style={{
                backgroundColor:'white',
                borderRadius:10,
                padding:10,
                borderWidth:0,
                width:100,
                
            }}>
                <img
                style={{
                    backgroundSize:'contain',
                    height:50
                }}
                alt=''
                src='./assets/fertilizante.png'
                />

                <div
                style={{
                    fontWeight:'600',
                }}
                >
                    Fertilizer
                </div>
            </button>

            <button 
            onClick={No}
            style={{
                backgroundColor:'white',
                borderRadius:10,
                padding:10,
                borderWidth:0,
                width:110,
            }}>
                <img
                style={{
                    backgroundSize:'contain',
                    height:50
                }}
                alt=''
                src='./assets/agro.png'
                />

                <div
                style={{
                    fontWeight:'600',
                }}
                >
                    Agrochemicals
                </div>
            </button>

            <button 
            onClick={No}            
            style={{
                backgroundColor:'white',
                borderRadius:10,
                padding:10,
                borderWidth:0,
                width:100,
            }}>
                <img
                style={{
                    backgroundSize:'contain',
                    height:50
                }}
                alt=''
                src='./assets/balde-agua.png'
                />

                <div
                style={{
                    fontWeight:'600',
                }}
                >
                    Water
                </div>
            </button>

            </div>
            
        </div>
    );
}

export default Modal;