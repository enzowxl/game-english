import { createContext, useState } from "react";

export const BottleContexts = createContext({
    totalBottle: 0,
    giveBottle: {
        total: 0,
        positions: []
    },
    updateBottle: (position) => null
})

export default function PaperProvider({ children }) {

    const [BottleState, setBottleState] = useState({
        totalBottle: 3,
        giveBottle: {
            total: 0,
            positions: []
        },
        updateBottle: (position) => {
            setBottleState((state) => {
                return {
                    totalBottle: state.totalBottle,
                    giveBottle: {
                        total: state.giveBottle.total + 1,
                        positions: state.giveBottle.positions.concat(position)
                    },
                    updateBottle: state.updateBottle
                }
            })
        }
    })



    return(

        <BottleContexts.Provider
        value={BottleState}
        >
            {children}
        </BottleContexts.Provider>

    )
    
}