import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { View, Text } from "react-native";
import * as Google from "expo-google-app-auth";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "@firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext({});

const config = {
  androidClientId:
    "796198051959-lbpts5n3f8okolqpigb58h0p3nog2pvv.apps.googleusercontent.com",
  iosClientId:
    "796198051959-drrnenoeecc612erkrived26dearsjdb.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //logged in
        setUser(user);
      } else {
        // Not loged in
        setUser(null);
      }

      setLoadingInitial(false);
    });
  }, []);

  const logout = async () => {
    setLoading(true);
    signOut(auth)
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const signInWithGoogle = async () => {
    setLoading(true);

    await Google.logInAsync(config)
      .then(async (logInResult) => {
        if (logInResult.type === "success") {
          console.log("logInResult ", logInResult);
          //Login...
          const { idToken, accessToken } = logInResult;
          const credential = GoogleAuthProvider.credential(
            idToken,
            accessToken
          );

          await signInWithCredential(auth, credential);
        }

        return Promise.reject();
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  };

  const memoValued = useMemo(
    () => ({
      user,
      loading,
      error,
      signInWithGoogle,
      logout,
    }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoValued}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
