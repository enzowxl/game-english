import { createContext, useState } from "react";

export const MetalContexts = createContext({
    totalMetal: 0,
    giveMetal: {
        total: 0,
        positions: []
    },
    updateMetal: (position) => null
})

export default function PaperProvider({ children }) {

    const [MetalState, setMetalState] = useState({
        totalMetal: 2,
        giveMetal: {
            total: 0,
            positions: []
        },
        updateMetal: (position) => {
            setMetalState((state) => {
                return {
                    totalMetal: state.totalMetal,
                    giveMetal: {
                        total: state.giveMetal.total + 1,
                        positions: state.giveMetal.positions.concat(position)
                    },
                    updateMetal: state.updateMetal
                }
            })
        }
    })



    return(

        <MetalContexts.Provider
        value={MetalState}
        >
            {children}
        </MetalContexts.Provider>

    )
    
}