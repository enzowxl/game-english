import React, { useContext } from 'react';

import { StepsContexts } from '../../../contexts/steps';
import { BananasContexts } from '../../../contexts/banana';
import { PapersContexts } from '../../../contexts/papers';
import { GlassContexts } from '../../../contexts/glass';
import { PlasticContexts } from '../../../contexts/plastic';
import { MetalContexts } from '../../../contexts/metal';
import { LifeContexts } from '../../../../context/Life';

function Guides() {

    const stepsContext = useContext(StepsContexts)

    const bananaContext = useContext(BananasContexts)

    const paperContext = useContext(PapersContexts)

    const glassContext = useContext(GlassContexts)

    const plasticContext = useContext(PlasticContexts)

    const metalContext = useContext(MetalContexts)

    const lifeContext = useContext(LifeContexts)

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
                height:370,
                backgroundColor:'#bb9362',
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
                    backgroundImage: `url(./assets/step.png)`,
                    backgroundRepeat: 'no-repeat',
                    height:30,
                    backgroundSize:'contain'
                }}
                >{'Your steps'.toUpperCase()} - {stepsContext.steps}
                </div>

                <div
                style={{
                    fontSize:15,
                    fontWeight:'500',
                    textAlign:'center',
                    color:'white',
                    margin:20,
                    backgroundImage: `url(./assets/paper2.png)`,
                    backgroundRepeat: 'no-repeat',
                    height:30,
                    backgroundSize:'contain'
                }}
                >{'Collected papers'.toUpperCase()} - {paperContext.givePapers.total}/2
                </div>

                <div
                style={{
                    fontSize:15,
                    fontWeight:'500',
                    textAlign:'center',
                    color:'white',
                    margin:20,
                    backgroundImage: `url(./assets/banana2.png)`,
                    backgroundRepeat: 'no-repeat',
                    height:30,
                    backgroundSize:'contain'
                }}
                >{'Collected bananas'.toUpperCase()} - {bananaContext.giveBananas.total}/2
                </div>

                <div
                style={{
                    fontSize:15,
                    fontWeight:'500',
                    textAlign:'center',
                    color:'white',
                    margin:20,
                    backgroundImage: `url(./assets/glass2.png)`,
                    backgroundRepeat: 'no-repeat',
                    height:30,
                    backgroundSize:'contain'
                }}
                >{'Collected glass bottle'.toUpperCase()} - {glassContext.giveGlass.total}/2
                </div>

                <div
                style={{
                    fontSize:15,
                    fontWeight:'500',
                    textAlign:'center',
                    color:'white',
                    margin:20,
                    backgroundImage: `url(./assets/plastic2.png)`,
                    backgroundRepeat: 'no-repeat',
                    height:30,
                    backgroundSize:'contain'
                }}
                >{'Collected garbage bag'.toUpperCase()} - {plasticContext.givePlastic.total}/2
                </div>

                <div
                style={{
                    fontSize:15,
                    fontWeight:'500',
                    textAlign:'center',
                    color:'white',
                    margin:20,
                    backgroundImage: `url(./assets/metal2.png)`,
                    backgroundRepeat: 'no-repeat',
                    height:30,
                    backgroundSize:'contain'
                }}
                >{'Collected can of soda'.toUpperCase()} - {metalContext.giveMetal.total}/2
                </div>

            </div>
            
        </div>
        
    );
}

export default Guides;