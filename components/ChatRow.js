import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import useAuth from "../hooks/useAuth";

const ChatRow = ({ matchDetails }) => {
  const navigation = useNavigation();
  const { user } = useAuth();

  return (
    <TouchableOpacity>
      <Image />
    </TouchableOpacity>
  );
};

export default ChatRow;

const styles = StyleSheet.create({});
