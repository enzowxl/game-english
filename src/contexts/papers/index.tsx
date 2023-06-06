import { createContext, useState } from "react";

export const PapersContexts = createContext({
    totalPapers: 0,
    givePapers: {
        total: 0,
        positions: []
    },
    updatePapers: (position) => null
})

export default function PaperProvider({ children }) {

    const [paperState, setPaperState] = useState({
        totalPapers: 5,
        givePapers: {
            total: 0,
            positions: []
        },
        updatePapers: (position) => {
            setPaperState((state) => {
                return {
                    totalPapers: state.totalPapers,
                    givePapers: {
                        total: state.givePapers.total + 1,
                        positions: state.givePapers.positions.concat(position)
                    },
                    updatePapers: state.updatePapers
                }
            })
        }
    })



    return(

        <PapersContexts.Provider
        value={paperState}
        >
            {children}
        </PapersContexts.Provider>

    )
    
}