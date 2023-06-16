import React, { useContext } from 'react';

import { StepsContexts } from '../../../contexts/steps';
import { LifeContexts } from '../../../../context/Life';
import { BottleContexts } from '../../../contexts/bottle';

function Guides() {

    const stepsContext = useContext(StepsContexts)

    const lifeContext = useContext(LifeContexts)

    const bottleContext = useContext(BottleContexts)

    return (

        <div
        style={{
            alignItems:'center',
        }}
        >

            <div
            style={{
                
            }}
            >

                {}

            </div>

            <div
            style={{
                position:'absolute',
                width:400,
                height:290,
                backgroundColor:'#899c9e',
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

{/*                <div
                style={{
                    fontSize:15,
                    fontWeight:'500',
                    textAlign:'center',
                    color:'white',
                    margin:20,
                    backgroundImage: `url(./assets/step.png)`,
                    backgroundRepeat: 'no-repeat',
                    height:30,
                    backgroundSize:'contain'
                }}
                >{'Your steps'.toUpperCase()} - {stepsContext.steps}
                </div>*/}

                <div
                style={{
                    fontSize:15,
                    fontWeight:'500',
                    textAlign:'center',
                    color:'white',
                    margin:20,
                    backgroundImage: `url(./assets/tubarao.png)`,
                    backgroundRepeat: 'no-repeat',
                    height:30,
                    backgroundSize:'contain'
                }}
                >{'Your enemies'.toUpperCase()} - 8
                </div>

                <div
                style={{
                    fontSize:15,
                    fontWeight:'500',
                    textAlign:'center',
                    color:'white',
                    margin:20,
                    backgroundImage: `url(./assets/bottle2.png)`,
                    backgroundRepeat: 'no-repeat',
                    height:30,
                    backgroundSize:'contain'
                }}
                >{'collected bottles'.toUpperCase()} - {bottleContext.giveBottle.total}/3
                </div>

                <div
                style={{
                    fontSize:15,
                    fontWeight:'500',
                    textAlign:'center',
                    color:'white',
                    margin:20,
                    backgroundImage: `url(./assets/shake2.png)`,
                    backgroundRepeat: 'no-repeat',
                    height:30,
                    backgroundSize:'contain'
                }}
                >{'collected mil shakes'.toUpperCase()} - {bottleContext.giveBottle.total}/3
                </div>


                <div
                style={{
                    fontSize:15,
                    fontWeight:'500',
                    textAlign:'center',
                    color:'white',
                    margin:20,
                    height:30,
                }}
                >Collect all the plastics and deliver them to the truck, but watch out for the sharks</div>


            </div>
            
        </div>
        
    );
}

export default Guides;