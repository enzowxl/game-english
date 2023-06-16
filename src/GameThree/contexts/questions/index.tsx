import { createContext, useState } from "react";

export const QuestionsContexts = createContext({
    questions: 2,
    updateQuestions: () => null,
    width: 100,
    top: 12,
    updateQuestionsOk: () => null,
    complete: () => null
})

export default function QuestionsProvider({ children }) {

    const [questionsState, setQuestionsState] = useState({
        questions:0,
        width: 100,
        top: 12,
        updateQuestionsOk: () => {
            setQuestionsState((state) => {

                const questions = state.questions + 1
                const width = state.width - 30
                const top = state.top - 12

                return {
                    ...state,
                    questions:questions,
                    updateQuestions: state.updateQuestions,
                    width: width,
                    top: top
                }
            })
        },
        updateQuestions: () => {
            setQuestionsState((state) => {

                const questions = state.questions + 1
                const width = state.width + 20
                const top = state.top + 10

                return {
                    ...state,
                    questions:questions,
                    updateQuestions: state.updateQuestions,
                    width: width,
                    top: top
                }
            })
        },
        complete: () => {
            setQuestionsState((state) => {

                const questions = state.questions + 1
                const width = 0
                const top = 0

                return {
                    ...state,
                    questions:questions,
                    updateQuestions: state.updateQuestions,
                    width: width,
                    top: top
                }
            })
        }
    })



    return(

        <QuestionsContexts.Provider
        value={questionsState}
        >
            {children}
        </QuestionsContexts.Provider>

    )
    
}