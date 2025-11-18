

import React, { useEffect, useState } from 'react';
import { AuthContext } from './Authcontect';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
 
    const [loading,setLoading]=useState(true)
    const googleprovider = new GoogleAuthProvider();
    const registerUger=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signinUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googlePopUp=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleprovider);
    }
    const updateUser=(userprofile)=>{
        return updateProfile(auth.currentUser,userprofile);
    }
    useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
   
        setUser(currentUser)
         setLoading(false);
 
})
return ()=>{
    unsubscribe()
}
    },[]);

    const logout=()=>{
        return signOut(auth).then(()=>
            alert("user logout successfull")
        ).catch(err=>{
            alert(err.message)
        })
    }
const data = {
  registerUger,
  signinUser,
  googlePopUp,
  logout,
  user,
  loading,
  updateUser,
};


    return <AuthContext value={data}>
        {children}
    </AuthContext>;
};

export default AuthProvider;