import React, { createContext, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';


const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const auth = getAuth(app);

    const signIn = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password);
    }

    const authInfo = {
        user,
        loading,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProviders;