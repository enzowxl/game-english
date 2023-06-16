import React, { useState } from 'react';

import Person from './components/Person';
import Ballon from './components/Ballons';
import Buttons from '../../Home/components/Buttons';
import { useNavigate } from 'react-router-dom';

function ExplicationGameTwoComponent() {

    const [ballon, setBallon] = useState(1)

    const [nameBtn, setnameBtn] = useState('BACK')

    const navigate = useNavigate()

    return (
        <div>


            <button
                onClick={() => {
                    setnameBtn('PREVIOUS')
                    if (ballon === 3) {
                        navigate('/game-2')
                    }

                    setBallon(ballon + 1)
                }}
                style={{
                    position: 'absolute',
                    top: 700,
                    backgroundColor: 'white',
                    width: 120,
                    height: 82,
                    borderRadius: 100,
                    fontWeight: '600',
                    color: 'black',//'#372713',
                    fontSize: 20,
                    right: 600,
                    zIndex: 200,
                    borderWidth: 0,
                    padding: 5

                }}
            >NEXT</button>

                <button
                onClick={() => {
                    if(ballon === 1){

                        return setBallon(1)

                    }
                    setBallon(ballon - 1)

                    
                }}
                style={{
                    position: 'absolute',
                    top: 700,
                    backgroundColor: 'white',
                    width: 120,
                    height: 82,
                    borderRadius: 100,
                    fontWeight: '600',
                    color: 'black',//'#372713',
                    fontSize: 20,
                    left: 600,
                    zIndex: 200,
                    borderWidth: 0,
                    padding: 5

                }}
            >PREVIOUS</button>

            <Ballon
                ballon={ballon}
            />

            <Person />

        </div>
    );
}

export default ExplicationGameTwoComponent;