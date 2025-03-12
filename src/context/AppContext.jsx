import { createContext, useState } from "react";
export const AppContext = createContext();
export const AppProvider = ({children}) => {
    const [name, setName] = useState("React");
    return (
        <AppContext.Provider value={{name, setName}}>
            {children}
        </AppContext.Provider>
    );
}