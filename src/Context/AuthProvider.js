import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"; 
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



const AuthProvider = ({children}) => {

    


    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithGooglePopup = () => {
        return signInWithPopup(auth, googleProvider)
    } 

    const addNameImg = (name, photourl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photourl,
        })
    }   

    const signInWithGoogle = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }   


    const logOut = () => {
        return signOut(auth)
    }

    const signInWithGithubPopup = () => {
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    },[])

    const resetPassword = email => {
        return sendPasswordResetEmail(auth, email);
    }

    const authInfo = {
        user,
        createUser,
        signInWithGooglePopup,
        addNameImg,
        signInWithGoogle,
        signInWithGithubPopup,
        logOut,
        loading,
        resetPassword
    };

    return (
        <>
            <AuthContext.Provider value={authInfo}>
                    {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;