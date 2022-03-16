import { createContext, useReducer } from "react";
import { stateType } from "./ColorReducer";
import ColorReducer from "./ColorReducer";

const initialState:stateType = {
    theme: "DARK",
    textFont: "#ddd",
    titleFont: "#fff",
    firstBackground: "#232323",
    secondBackground: "#332F2E"
}

type ContextType = {
    state: stateType;
    dispatch: React.Dispatch<any>
}

export const GlobalContext = createContext<ContextType>({
    state: initialState,
    dispatch: ()=>null
})

export const GlobalProvider:React.FC = ({children})=>{

    const [state, dispatch] = useReducer(ColorReducer, initialState)

    return(
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}