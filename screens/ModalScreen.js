import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import tw from "tailwind-rn";
import useAuth from "../hooks/useAuth";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const ModalScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);

  const incompleteFrom = !image || !job || !age;

  const updateUserProfile = () => {
    setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      displayName: user.displayName,
      photoURL: image,
      job: job,
      age: age,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const test = async () => {
    console.log("postt");
    // console.log("added ", user.uid);
    // Add a new document in collection "cities"
    await setDoc(doc(db, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
  };

  return (
    <View style={tw("flex-1 items-center pt-1")}>
      <Image
        style={tw("h-20 w-full")}
        resizeMode="contain"
        source={{ uri: "https://links.papareact.com/2pf" }}
      />

      <Text style={tw("text-xl text-gray-500 p-2 font-bold")}>
        Welcome {user.displayName}
      </Text>

      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step 1: The Profile Pic
      </Text>
      <TextInput
        value={image}
        onChangeText={(text) => setImage(text)}
        style={tw("text-center text-xl pb-2")}
        placeholder="Enter a Profile Pic URL"
      />

      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step 2: The Job
      </Text>
      <TextInput
        value={job}
        onChangeText={(text) => setJob(text)}
        style={tw("text-center text-xl pb-2")}
        placeholder="Enter your occupation"
      />

      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step 3: The Age
      </Text>
      <TextInput
        value={age}
        onChangeText={(text) => setAge(text)}
        style={tw("text-center text-xl pb-2")}
        placeholder="Enter your age"
        keyboardType="numeric"
        maxLength={2}
      />

      <TouchableOpacity
        disabled={incompleteFrom}
        style={[
          tw("w-64 p-3 rounded-xl absolute bottom-10"),
          incompleteFrom ? tw("bg-gray-400") : tw("bg-red-400"),
        ]}
        onPress={updateUserProfile}
      >
        <Text style={tw("text-center text-white text-xl")}>Update Profile</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={[tw("w-64 p-3 rounded-xl absolute bottom-20 bg-red-400")]}
        onPress={test}
      >
        <Text style={tw("text-center text-white text-xl")}>Post</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({});
