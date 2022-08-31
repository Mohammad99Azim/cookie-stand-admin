import { createContext , useState } from "react";
import axios from "axios";


export const AuthContext = createContext();

export function AuthWrapper({ children }) {
    const [globalState, setGlobalState] = useState({
    token:null,
    login,
})

    async function login(userInfo){
            const url ="https://cookie99stand99api.herokuapp.com/api/token/"
            const res = await axios.post(url, userInfo);

            setGlobalState({
                token:res.data,
                login,
            })

        }

    
    return (
        <>
        <AuthContext.Provider value={globalState}>
            {children}
        </AuthContext.Provider>
        </>
    )

}
