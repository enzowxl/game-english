import React, { useContext, useState } from 'react';
import './style.css'
import { LifeContexts } from '../../../../context/Life';
import { QuestionsContexts } from '../../../contexts/questions';

function Modal({
    modalVisible,
    setModalVisible,
    modalVisible2,
    setModalVisible2
}) {

    const lifesContext = useContext(LifeContexts)
    const questionContext = useContext(QuestionsContexts)

    function No() {
        
        //questionContext.updateQuestions()
        lifesContext.updateLifes()

    }

    function Ok() {

        setModalVisible(!modalVisible)
        questionContext.updateQuestionsOk()
        setTimeout(() => {
            setModalVisible2(true)
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
            >Oh help us, the logging companies are deforesting and burning the forests!  What is the best option we can use to put out the fire?</div>

            <div className='buttons'>

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
                src='./assets/petrol.png'
                />

                <div
                style={{
                    fontWeight:'600',
                }}
                >
                    Petrol
                </div>
            </button>

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
                src='./assets/balde-areia.png'
                />

                <div
                style={{
                    fontWeight:'600',
                }}
                >
                    Sand
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
                src='./assets/fire.png'
                />

                <div
                style={{
                    fontWeight:'600',
                }}
                >
                Fire extinguisher
                </div>
            </button>

            </div>
            
        </div>
    );
}

export default Modal;