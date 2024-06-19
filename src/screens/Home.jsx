import React from "react";
import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { BlurView } from 'expo-blur';

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/bgInitialPage.png")}
      style={styles.backgroundImage}
    >
      
      <View style={styles.purpleSec}>
        <Image
          source={require("../../assets/runIcon.png")}
          style={{ width: 38, height: 43, alignSelf: "center" }}
        />
        <Text style={styles.text}>
          Comece sua jornada em um melhor estilo de vida
        </Text>
        <View style={styles.barIndicator}>
          <View style={styles.barIndicatorItemActive}></View>
          <View style={styles.barIndicatorItem}></View>
          <View style={styles.barIndicatorItem}></View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <BlurView intensity={50} style={styles.buttonBlur} />
        <TouchableOpacity
          style={styles.clearBtn}
          onPress={() => navigation.navigate("Second")}
        >
          <Text style={styles.btnText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  purpleSec: {
    backgroundColor: "#B3A0FF",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
  },
  barIndicator: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  barIndicatorItemActive: {
    width: 30,
    height: 7,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 5,
  },
  barIndicatorItem: {
    width: 30,
    height: 7,
    borderRadius: 5,
    backgroundColor: "#896CFE",
    marginHorizontal: 5,
  },
  buttonContainer: {
    position: 'relative',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowOpacity: 0.40,
  },
  buttonBlur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 30,
    overflow: 'hidden',
  },
  clearBtn: {
    paddingVertical: 14,
    borderColor: "#fff",
    borderWidth: 1,
    paddingHorizontal: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.01)', // Slightly transparent background
    
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
