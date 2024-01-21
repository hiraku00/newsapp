import { Image, StyleSheet, Text, View } from "react-native";

interface NewsProps {
  imageuri: string;
  title: string;
  subtext: string;
}

export default function News({ imageuri, title, subtext }: NewsProps) {
  return (
    <View style={styles.box}>
      <View style={styles.moziBox}>
        <Text style={styles.Text}>{title}</Text>
        <Text style={styles.subText}>{subtext}</Text>
      </View>
      <View style={styles.gazoBox}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: imageuri,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 100,
    width: "100%",
    borderColor: "lightblue",
    borderWidth: 1,
    flexDirection: "row",
  },
  moziBox: {
    flex: 1,
    backgroundColor: "steelblue",
    padding: 16,
    justifyContent: "space-between",
  },
  gazoBox: {
    width: 100,
    backgroundColor: "powderblue",
  },
  Text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "red",
  },
});
