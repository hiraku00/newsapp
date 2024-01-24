import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface WeatherProps {
  description: string;
  icon: string;
  name: string;
}

export default function WeatherItem({ description, icon, name }: WeatherProps) {
  return (
    <View style={styles.box}>
      <View style={styles.moziBox}>
        <Text style={styles.text}>{name}</Text>
      </View>

      <View style={styles.gazoBox}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: icon }} />
        <Text style={styles.subText}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: "100%",
    borderColor: "lightgray",
    borderWidth: 0.4,
    flexDirection: "row",
  },

  gazoBox: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  moziBox: {
    flex: 1,
    padding: 35,
    justifyContent: "center",
  },

  text: {
    fontSize: 17,
  },

  subText: {
    fontSize: 14,
    color: "darkblue",
  },
});
