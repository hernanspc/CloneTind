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
import { Avatar } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";

const ModalScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);

  const [imagePic, setImagePic] = useState(null);

  const incompleteFrom = !image || !job || !age;

  const updateUserProfile = () => {
    // setDoc(doc(db, "users", user.uid), {
    //   id: user.uid,
    //   displayName: user.displayName,
    //   photoURL: image,
    //   job: job,
    //   age: age,
    //   timestamp: serverTimestamp(),
    // })
    //   .then(() => {
    //     navigation.navigate("Home");
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    console.log("blob ", JSON.stringify(blob));

    const ref = firebase.storage().ref().child(`avatar/avatar-ratata.jpg`);
    console.log("ref ", ref);
    return ref.put(blob);
    // const spaceRef = ref(storage, `avatar/avatar-1.jpg`);
    // console.log("spaceRef  ", spaceRef);
    // return spaceRef.put(blob);
  };

  const pickImage = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.status === "denied") {
      Alert.alert(
        "Alerta!",
        " Es necesario aceptar los permisos de la galeria",
        [{ text: "Ok" }]
      );
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log("result ", result.uri);
      if (result.cancelled) {
        Alert.alert("Alerta!", " Has cerrado la selección de imagenes", [
          { text: "Ok" },
        ]);
      } else {
        setImagePic(result.uri);

        uploadImage(result.uri)
          .then(() => {
            console.log(" Subida Correctamente");
          })
          .catch(() => {
            console.log(" Error al actualizar avatar");
          });
      }
    }
  };

  return (
    <View style={tw("flex-1 items-center pt-1")}>
      {/* <Image
        style={tw("h-20 w-full")}
        resizeMode="contain"
        source={{ uri: "https://links.papareact.com/2pf" }}
      /> */}

      <Text style={tw("text-xl text-gray-500 p-2 font-bold")}>
        Welcome {user.displayName}
      </Text>

      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step 1: The Profile Pic
      </Text>
      {/* <TextInput
        value={image}
        onChangeText={(text) => setImage(text)}
        style={tw("text-center text-xl pb-2")}
        placeholder="Enter a Profile Pic URL"
      /> */}
      <View
        style={
          {
            // justifyContent: "space-around",
            // marginBottom: 30,
          }
        }
      >
        <Avatar
          onPress={pickImage}
          size="large"
          rounded
          source={
            imagePic
              ? { uri: imagePic }
              : require("./../assets/app/avatar/avatar-default.jpg")
          }
          title=""
          showEditButton
          containerStyle={{ marginRight: 20 }}
        >
          {/* <Avatar.Accessory size={23} /> */}
        </Avatar>
      </View>

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
