import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext=createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
 const [user,setUser]=useState(null);
 const [loader,setLoader]=useState(true);

 const createUser=(email,password)=>{
  setLoader(true)
  return createUserWithEmailAndPassword(auth,email,password)
 }
 const signInUser=(email,password)=>{
  setLoader(true)
  return signInWithEmailAndPassword(auth,email,password)
 }

 const googleLogin=()=>{
  setLoader(true);
  return signInWithPopup(auth,googleProvider)
 }
 const logOut=()=>{
  setLoader(true)
  return signOut(auth)
 }
 const userProfileUpdate=(name,photo)=>{
  return updateProfile(auth.currentUser, {
    displayName: name, photoURL: photo
  })
 }

 useEffect(()=>{
  const unSubscribe=onAuthStateChanged(auth,createUser=>{
    setUser(createUser)
    setLoader(false)
  })
  return ()=>{
    unSubscribe()
  }
 },[])
  const AuthInfo={
    user,
    loader,
    createUser,
    signInUser,
    logOut,
    userProfileUpdate,
    googleLogin
  }
  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;