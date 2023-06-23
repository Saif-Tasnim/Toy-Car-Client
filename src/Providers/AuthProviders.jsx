import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const signIn = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password);
    }

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const googleSign = () =>{
        return signInWithPopup(auth , googleProvider);
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    } , [])

    const authInfo = {
        user,
        loading,
        signIn,
        createUser,
        logOut,
        googleSign
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProviders;