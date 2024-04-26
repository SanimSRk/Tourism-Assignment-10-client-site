import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/Firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [lodings, setLodings] = useState(true);
  const googlePoviders = new GoogleAuthProvider();
  const gitHubProviders = new GithubAuthProvider();
  const hanidleClickCreat = (email, password) => {
    setLodings(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updataUserProfile = (fullName, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: photo,
    });
  };
  const handileLogin = (email, password) => {
    setLodings(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handileLogoutUsr = () => {
    setUser(null);
    setLodings(false);
    signOut(auth);
  };

  const googleLoginuser = () => {
    return signInWithPopup(auth, googlePoviders);
  };
  const gitHubLiogin = () => {
    return signInWithPopup(auth, gitHubProviders);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
        setLodings(false);
      } else {
        setLodings(false);
      }
      return () => unsubscribe;
    });
  }, []);
  const info = {
    hanidleClickCreat,
    handileLogin,
    handileLogoutUsr,
    user,
    updataUserProfile,
    googleLoginuser,
    gitHubLiogin,
  };
  return (
    <>
      <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
