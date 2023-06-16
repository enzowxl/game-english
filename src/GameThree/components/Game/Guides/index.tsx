import React, { useContext } from 'react';

import { StepsContexts } from '../../../contexts/steps';
import { LifeContexts } from '../../../../context/Life';
import { QuestionsContexts } from '../../../contexts/questions';

function Guides() {

    const stepsContext = useContext(StepsContexts)

    const lifeContext = useContext(LifeContexts)

    const questionContext = useContext(QuestionsContexts)

    return (

        <div
        style={{
            alignItems:'center',
        }}
        >

            <div
            style={{
                position:'absolute',
                width:400,
                height:170,
                backgroundColor:'#6ebf65',
                left:30,
                top:300,
                borderRadius:30
            }}
            >

                <p
                style={{
                    fontSize:22,
                    fontWeight:'bold',
                    textAlign:'center',
                    color:'white',
                    margin:20
                }}
                >{'Guide'.toUpperCase()}</p>

                <div
                style={{
                    fontSize:15,
                    fontWeight:'500',
                    textAlign:'center',
                    color:'white',
                    margin:20,
                    backgroundImage: `url(./assets/question.png)`,
                    backgroundRepeat: 'no-repeat',
                    height:30,
                    backgroundSize:'contain'
                }}
                >{'Questions'.toUpperCase()} - {questionContext.questions}/2
                </div>

                <div
                style={{
                    fontSize:15,
                    fontWeight:'500',
                    textAlign:'center',
                    color:'white',
                    margin:20,
                    //backgroundImage: `url(./assets/step.png)`,
                    backgroundRepeat: 'no-repeat',
                    height:30,
                    backgroundSize:'contain'
                }}
                >Answer the questions correctly to put out the fire</div>

            </div>
            
        </div>
        
    );
}

export default Guides;