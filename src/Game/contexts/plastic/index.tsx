import { createContext, useState } from "react";

export const PlasticContexts = createContext({
    totalPlastic: 0,
    givePlastic: {
        total: 0,
        positions: []
    },
    updatePlastic: (position) => null
})

export default function PaperProvider({ children }) {

    const [PlasticState, setPlasticState] = useState({
        totalPlastic: 2,
        givePlastic: {
            total: 0,
            positions: []
        },
        updatePlastic: (position) => {
            setPlasticState((state) => {
                return {
                    totalPlastic: state.totalPlastic,
                    givePlastic: {
                        total: state.givePlastic.total + 1,
                        positions: state.givePlastic.positions.concat(position)
                    },
                    updatePlastic: state.updatePlastic
                }
            })
        }
    })



    return(

        <PlasticContexts.Provider
        value={PlasticState}
        >
            {children}
        </PlasticContexts.Provider>

    )
    
}