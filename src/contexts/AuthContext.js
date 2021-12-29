import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth, googleProvider } from "../../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  },[]);

  function signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function signInWithGoogle() {
    return auth.signInWithPopup(googleProvider)
  }

  const value = {
    user,
    signIn,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
