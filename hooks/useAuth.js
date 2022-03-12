import React, { createContext, useContext } from "react";
import { View, Text } from "react-native";
import * as Google from "expo-google-app-auth";
import LogBoxInspectorContainer from "react-native/Libraries/LogBox/LogBoxInspectorContainer";

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
  const signInWithGoogle = async () => {
    Google.logInAsync(config).then(async (logInResult) => {
      if (logInResult.type === "success") {
        //Login...
      }
    });
  };

  return (
    <AuthContext.Provider value={{ user: null, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
