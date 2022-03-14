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
import React, { useLayoutEffect, useRef } from "react";
import tw from "tailwind-rn";
import useAuth from "../hooks/useAuth";
import { AntDesing, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

const DUMMY_DATA = [
  {
    firstName: "Omar",
    lastName: "Perello",
    job: "Veterinario",
    photoURL: "https://i.pravatar.cc/150?img=12",
    age: 19,
    id: 101,
  },
  {
    firstName: "Maitane",
    lastName: "Carretero",
    job: "Software Developer",
    photoURL: "https://i.pravatar.cc/150?img=47",
    age: 23,
    id: 102,
  },
  {
    firstName: "Ion",
    lastName: "España",
    job: "Graphic Design",
    photoURL: "https://i.pravatar.cc/150?img=13",
    age: 20,
    id: 103,
  },
  {
    firstName: "Tamara",
    lastName: "Diego",
    job: "Graphic Design",
    photoURL: "https://i.pravatar.cc/150?img=10",
    age: 20,
    id: 104,
  },
  {
    firstName: "Shaggui",
    lastName: "Royer",
    job: "Software Developer",
    photoURL:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/9a/9ada927c72e6d02d394762a4725bfe46862cd527_full.jpg",
    age: 30,
    id: 105,
  },
  {
    firstName: "Ezequiel",
    lastName: "Luis",
    job: "Music",
    photoURL: "https://i.pravatar.cc/150?img=11",
    age: 32,
    id: 106,
  },
  {
    firstName: "Susana",
    lastName: "Escobar",
    job: "Actrice",
    photoURL: "https://i.pravatar.cc/150?img=32",
    age: 18,
    id: 107,
  },
  {
    firstName: "Benjamin",
    lastName: "Dos-Santos",
    job: "Actor",
    photoURL: "https://i.pravatar.cc/150?img=8",
    age: 21,
    id: 108,
  },
  {
    firstName: "Thiago",
    lastName: "Stefano",
    job: "Children",
    photoURL: "https://i.pravatar.cc/150?img=4",
    age: 10,
    id: 109,
  },
  {
    firstName: "Sara",
    lastName: "Maria Villa",
    job: "House",
    photoURL: "https://i.pravatar.cc/150?img=39",
    age: 20,
    id: 110,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  const swipeRef = useRef(null);

  return (
    <SafeAreaView style={tw("flex-1")}>
      {/*header*/}
      <View style={tw("flex-row items-center justify-between px-5")}>
        <TouchableOpacity onPress={logout}>
          <Image
            style={tw("h-10 w-10 rounded-full")}
            source={{ uri: user.photoURL }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
          <Image
            style={tw("h-14 w-14")}
            source={require(`../assets/logo/logo.png`)}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Ionicons name="chatbubbles-sharp" size={30} color={"#FF5854"} />
        </TouchableOpacity>
      </View>
      {/*end header*/}

      <View style={tw("flex-1 -mt-6")}>
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DUMMY_DATA}
          stackSize={10}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          onSwipedLeft={() => {
            console.log("left");
          }}
          onSwipedRight={() => {
            console.log("Right");
          }}
          backgroundColor={"#4FD0E9"}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  textAlign: "left",
                  color: "#4DED30",
                },
              },
            },
          }}
          renderCard={(card) => (
            <View
              key={card.id}
              style={tw("relative bg-white h-3/4 rounded-xl")}
            >
              <Image
                style={tw("absolute top-0 h-full w-full rounded-xl")}
                source={{ uri: card.photoURL }}
              />

              <View
                style={[
                  tw(
                    "absolute bottom-0 bg-white w-full flex-row justify-between items-center h-20 px-6 py-2 rounded-b-xl"
                  ),
                  styles.cardShadow,
                ]}
              >
                <View>
                  <Text style={tw("text-xl font-bold")}>
                    {card.firstName} {card.lastName}
                  </Text>
                  <Text>{card.job}</Text>
                </View>
                <Text style={tw("text-2xl font-bold")}>{card.age}</Text>
              </View>
            </View>
          )}
        />
      </View>

      <View style={tw("flex flex-row justify-evenly")}>
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeLeft()}
          style={tw(
            "items-center justify-center rounded-full w-16 h-16 bg-red-200"
          )}
        >
          <Entypo name="cross" size={24} color="red" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => swipeRef.current.swipeRight()}
          style={tw(
            "items-center justify-center rounded-full w-16 h-16 bg-green-200"
          )}
        >
          <Entypo name="heart" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
