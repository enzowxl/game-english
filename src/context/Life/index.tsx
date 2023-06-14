import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'


export const LifeContexts = createContext({
    updateLifes: () => null
})


export default function LifesProvider({ children }) {


    const navigate = useNavigate()

    const [LifesState, setLifesState] = useState({
        updateLifes: () => {
            setLifesState((state) => {

                const Llifes = window.localStorage.getItem('@lifes')

                if(Llifes === '3'){
                    window.localStorage.setItem('@lifes', '2')
                }

                if(Llifes === '2'){
                    window.localStorage.setItem('@lifes', '1')
                }

                if(Llifes === '1'){
                    navigate('/dead')
                    window.localStorage.setItem('@lifes', '3')   
                }

                /*if(Llifes === '0'){
                    navigate('/dead')
                    window.localStorage.setItem('@lifes', '3')    
                }*/

                window.location.reload()

                return {
                    updateLifes: state.updateLifes
                }
            })
        }
    })



    return(

        <LifeContexts.Provider
        value={LifesState}
        >
            {children}
        </LifeContexts.Provider>

    )
    
}