import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, []);

  return (
    <SafeAreaView>
      <Text>HomeScreenss</Text>
      <Button
        title="Go to the Chat Screen"
        onPress={() => navigation.navigate("Chat")}
      />

      <Button title="Logout" onPress={logout} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
