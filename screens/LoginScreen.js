import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const { signInWithGoogle } = useAuth();

  console.log("user: ", signInWithGoogle);
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="login" onPress={signInWithGoogle} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
