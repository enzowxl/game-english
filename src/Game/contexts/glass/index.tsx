import { createContext, useState } from "react";

export const GlassContexts = createContext({
    totalGlass: 0,
    giveGlass: {
        total: 0,
        positions: []
    },
    updateGlass: (position) => null
})

export default function PaperProvider({ children }) {

    const [GlassState, setGlassState] = useState({
        totalGlass: 2,
        giveGlass: {
            total: 0,
            positions: []
        },
        updateGlass: (position) => {
            setGlassState((state) => {
                return {
                    totalGlass: state.totalGlass,
                    giveGlass: {
                        total: state.giveGlass.total + 1,
                        positions: state.giveGlass.positions.concat(position)
                    },
                    updateGlass: state.updateGlass
                }
            })
        }
    })



    return(

        <GlassContexts.Provider
        value={GlassState}
        >
            {children}
        </GlassContexts.Provider>

    )
    
}