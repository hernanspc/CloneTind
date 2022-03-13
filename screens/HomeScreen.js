import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();

  return (
    <View>
      <Text>HomeScreenss</Text>
      <Button
        title="Go to the Chat Screen"
        onPress={() => navigation.navigate("Chat")}
      />

      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
