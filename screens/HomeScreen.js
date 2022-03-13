import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import tw from "tailwind-rn";
import useAuth from "../hooks/useAuth";
import { AntDesing, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

const DUMMY_DATA = [
  {
    firstName: "Omar",
    lastName: "Perello",
    occupation: "Veterinario",
    photoURL: "https://i.pravatar.cc/150?img=12",
    age: 19,
  },
  {
    firstName: "Maitane",
    lastName: "Carretero",
    occupation: "Software Developer",
    photoURL: "https://i.pravatar.cc/150?img=47",
    age: 23,
  },
  {
    firstName: "Ion",
    lastName: "España",
    occupation: "Graphic Design",
    photoURL: "https://i.pravatar.cc/150?img=13",
    age: 20,
  },
  {
    firstName: "Tamara",
    lastName: "Diego",
    occupation: "Graphic Design",
    photoURL: "https://i.pravatar.cc/150?img=10",
    age: 20,
  },
  {
    firstName: "Shaggui",
    lastName: "Royer",
    occupation: "Software Developer",
    photoURL:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/9a/9ada927c72e6d02d394762a4725bfe46862cd527_full.jpg",
    age: 30,
  },
  {
    firstName: "Ezequiel",
    lastName: "Luis",
    occupation: "Music",
    photoURL: "https://i.pravatar.cc/150?img=11",
    age: 32,
  },
  {
    firstName: "Susana",
    lastName: "Escobar",
    occupation: "Actrice",
    photoURL: "https://i.pravatar.cc/150?img=32",
    age: 18,
  },
  {
    firstName: "Benjamin",
    lastName: "Dos-Santos",
    occupation: "Actor",
    photoURL: "https://i.pravatar.cc/150?img=8",
    age: 21,
  },
  {
    firstName: "Thiago",
    lastName: "Stefano",
    occupation: "Children",
    photoURL: "https://i.pravatar.cc/150?img=4",
    age: 10,
  },
  {
    firstName: "Sara",
    lastName: "Maria Villa",
    occupation: "House",
    photoURL: "https://i.pravatar.cc/150?img=39",
    age: 20,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  console.log(user);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, []);

  console.log("photo ", user?.photoURL);

  return (
    <SafeAreaView>
      {/*header*/}
      <View style={tw("flex-row items-center justify-between px-5")}>
        <TouchableOpacity onPress={logout}>
          <Image
            style={tw("h-10 w-10 rounded-full")}
            source={{ uri: user.photoURL }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={tw("h-14 w-14")}
            source={require(`../assets/logo/logo.png`)}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={tw("")}
          onPress={() => navigation.navigate("Chat")}
        >
          <Ionicons name="chatbubbles-sharp" size={30} color={"#FF5854"} />
        </TouchableOpacity>
      </View>

      {/*end header*/}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
