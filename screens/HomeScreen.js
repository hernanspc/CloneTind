import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import React from "react";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to the Chat Screen"
        onPress={() => navigation.navigate("Chat")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
