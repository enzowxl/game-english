import { createContext, useState } from "react";

export const BananasContexts = createContext({
    totalBananas: 0,
    giveBananas: {
        total: 0,
        positions: []
    },
    updateBananas: (position) => null
})

export default function BananaProvider({ children }) {

    const [bananaState, setBananaState] = useState({
        totalBananas: 4,
        giveBananas: {
            total: 0,
            positions: []
        },
        updateBananas: (position) => {
            setBananaState((state) => {
                return {
                    totalBananas: state.totalBananas,
                    giveBananas: {
                        total: state.giveBananas.total + 1,
                        positions: state.giveBananas.positions.concat(position)
                    },
                    updateBananas: state.updateBananas
                }
            })
        }
    })



    return(

        <BananasContexts.Provider
        value={bananaState}
        >
            {children}
        </BananasContexts.Provider>

    )
    
}