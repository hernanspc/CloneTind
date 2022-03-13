import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import tw from "tailwind-rn";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const { signInWithGoogle, loading } = useAuth();
  const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShow: false,
  //   });
  // }, []);

  console.log("user: ", signInWithGoogle);
  return (
    <View style={tw("flex-1")}>
      {/* <Text>{loading ? `loading....` : `Login to the app`}</Text>
      <Button title="login" onPress={signInWithGoogle} /> */}
      <ImageBackground
        resizeMode="cover"
        style={tw("flex-1")}
        source={{ uri: `https://tinder.com/static/tinder.png` }}
      >
        <Text>Sign in & get swiping</Text>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
