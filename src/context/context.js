import { createContext,useContext,useReducer} from "react";
import reducer,{initState} from "./reducer";

export const Context = createContext()
function Provider({children}) {

    const [state,dispatch] = useReducer(reducer,initState)


    return ( 
        <Context.Provider value ={[state,dispatch]}>
            {children}
        </Context.Provider>
     );
}

export default Provider;
