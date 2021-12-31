import React, { createContext, useContext, useState, useEffect } from 'react'
import "../firebase";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({children}) {
  const auth = getAuth()
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  },[auth]);

  const signIn = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response
  }

  const signUp = async (email, password) => {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return response
  }

  const logout = () => {
    const response = auth.signOut();
    return response
  }

  const value = {
    user,
    signIn,
    signUp,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
