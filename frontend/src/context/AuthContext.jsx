import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext);
}

//authProvider

export const AuthProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(null);
    const [loading,setLoading] = useState(true);

    //register a user
    const registerUser = async(email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    };

    const value =  {
        currentUser,
        registerUser,
    }
    
    return (
        <AuthContext.Provider value={value}>
        {children}
        </AuthContext.Provider>
    )


}
