

import React from 'react';
import { AuthContext } from './Authcontect';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const registerUger=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signinUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
const data = {
  registerUger,
  signinUser,
};


    return <AuthContext value={data}>
        {children}
    </AuthContext>;
};

export default AuthProvider;