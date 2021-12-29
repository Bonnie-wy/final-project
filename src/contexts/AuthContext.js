// import React, { createContext, useContext, useState, useEffect } from 'react'
// import { auth, googleProvider } from "../../firebase";

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export default function AuthContext({children}) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   },[]);

//   const value = {
//     user,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   )
// }
