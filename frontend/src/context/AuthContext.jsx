import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { set } from "react-hook-form";


const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext);
}

//authProvider
const googleProvider = new GoogleAuthProvider();


export const AuthProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(null);
    const [loading,setLoading] = useState(true);

    //register a user
    const registerUser = async(email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    };
    //login a user
    const loginUser = async(email,password) =>{
        return await signInWithEmailAndPassword(auth, email, password);

    }
    //sign up with google
    const signInWithGoogle = async() => {
        return await signInWithPopup(auth, googleProvider);
    }

    //logout user
    const logout = () => {
        return auth.signOut();
    }

    //manage user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            setCurrentUser(user);
            setLoading(false);

            if(user)
            {
                const {email, displayName,photoURL} =user;
                const userData = {
                    email,username : displayName, 
                    photo : photoURL 
                }
            }
        })
        return ()=> unsubscribe();
    },[])
    const value =  {
        currentUser,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    }

    
    return (
        <AuthContext.Provider value={value}>
        {children}
        </AuthContext.Provider>
    )


}
