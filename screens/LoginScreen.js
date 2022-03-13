import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";
import tw from "tailwind-rn";

const LoginScreen = () => {
  const { signInWithGoogle } = useAuth();

  console.log("user: ", signInWithGoogle);
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="login" onPress={signInWithGoogle} />
      <Text style={tw("flex-1 justify-center items-center")}>Hello world</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
