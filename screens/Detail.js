import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";

function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="chevron-left" color="#fff" size={25} />
        </TouchableOpacity>
        <Feather name="shopping-cart" color="#fff" size={25} />
      </View>
      <Image source={require("../img/2.png")} style={styles.img} />
      <View style={styles.cont3}>
        <Text style={styles.title}>Franky Scooter</Text>
        <Text style={styles.subtitle}>Model S1</Text>
        <View style={styles.cont2}>
          <Text style={{ ...styles.title, flex2, marginTop: 0 }}>Colors</Text>
        </View>
        <View style={styles.c2} />
        <View style={styles.c3} />
      </View>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectutur adipsing elit, sed do eiusmod
        tempor inciduc
      </Text>
      <View>
        <FontAwesome name="heart-o" color="#000" size={25} />
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Detail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 20,
    fontFamily: "Monsterrat_400Regular",
    marginTop: 30,
  },
  subtitle: {
    fontSize: 20,
    color: "#474747",
    marginTop: 10,
  },
  text: {
    fontFamily: "Monsterrat_400regular",
    fontSize: 10,
    paddingRight: 80,
    lineHeight: 25,
  },
  btn: {
    backgroundColor: "#E2443B",
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 30,
  },
});
