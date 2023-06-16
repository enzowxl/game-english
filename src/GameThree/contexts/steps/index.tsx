import { createContext, useState } from "react";

export const StepsContexts = createContext({
    steps: 70,
    updateSteps: () => null
})

export default function StepsProvider({ children }) {

    const [stepsState, setStepsState] = useState({
        steps:70,
        updateSteps: () => {
            setStepsState((state) => {

                const removeSteps = state.steps - 1

                return {
                    ...state,
                    steps:removeSteps,
                    updateSteps: state.updateSteps
                }
            })
        }
    })



    return(

        <StepsContexts.Provider
        value={stepsState}
        >
            {children}
        </StepsContexts.Provider>

    )
    
}