import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const { user } = useAuth();
  console.log("user: ", user);
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
