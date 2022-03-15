import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";

const MessageScreen = () => {
  return (
    <SafeAreaView>
      <Header title={"Messages"} callEnabled />
      <Text>MessageScreen</Text>
    </SafeAreaView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
