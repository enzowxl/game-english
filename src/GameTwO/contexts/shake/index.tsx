import { createContext, useState } from "react";

export const ShakeContexts = createContext({
    totalShake: 0,
    giveShake: {
        total: 0,
        positions: []
    },
    updateShake: (position) => null
})

export default function PaperProvider({ children }) {

    const [ShakeState, setShakeState] = useState({
        totalShake: 3,
        giveShake: {
            total: 0,
            positions: []
        },
        updateShake: (position) => {
            setShakeState((state) => {
                return {
                    totalShake: state.totalShake,
                    giveShake: {
                        total: state.giveShake.total + 1,
                        positions: state.giveShake.positions.concat(position)
                    },
                    updateShake: state.updateShake
                }
            })
        }
    })



    return(

        <ShakeContexts.Provider
        value={ShakeState}
        >
            {children}
        </ShakeContexts.Provider>

    )
    
}