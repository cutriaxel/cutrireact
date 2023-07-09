import { createContext, useEffect, useState } from "react";
import { signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config.js";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
  });

  const login = (values) => {
    return signInWithEmailAndPassword(auth, values.email, values.password);
  };

  const register = (values) => {
    return createUserWithEmailAndPassword(auth, values.email, values.password);
  };

  const logout = () => {
    signOut(auth);
  };

  const googleLogin = () => {
    signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          logged: true,
          email: user.email,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
      } else {
        localStorage.removeItem("user");
        setUser({
          logged: false,
          email: null,
        });
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ googleLogin, user, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};