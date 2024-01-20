import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.moziBox}>
          <Text style={styles.Text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illo a dolorem provident aliquid optio.
          </Text>
          <Text style={styles.subText}>Lorem, ipsum dolor.</Text>
        </View>
        <View style={styles.gazoBox}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: "https://picsum.photos/id/237/200/300",
            }}
          />
        </View>
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
