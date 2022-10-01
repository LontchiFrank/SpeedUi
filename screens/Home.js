import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  useFonts,
  Monsterrat_400Regular,
  Monsterrat_600SemiBold,
  Monsterrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { TouchableOpacity } from "react-native-gesture-handler";

function Home() {
  let [fontsLoaded] = useFonts({
    Monsterrat_400Regular,
    Monsterrat_600SemiBold,
    Monsterrat_700Bold,
  });

  return (
    <View style={styles.container}>
      <Image source={require("../img/1.png")} style={styles.img} />
      <Text style={styles.title}>Frank Scooter</Text>
      <Text style={styles.detail}>
        With an Updated motor, and integrated anti-theft tech the Frank scooters
        are custom-tuned for the ultimate riding experience.
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("Detail")}
      >
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  img: {
    height: "50%",
    width: "120%",
    resizeMode: "contain",
  },
  title: {
    color: "white",
    fontFamily: "Monsterrat_700Bold",
    fontSize: 30,
    marginTop: 20,
  },
  detail: {
    color: "white",
    fontFamily: "Monsterrat_400Regular",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 30,
  },
});
