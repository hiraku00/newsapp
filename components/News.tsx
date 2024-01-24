import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface NewsProps {
  imageuri: string;
  title: string;
  subtext: string;
  sourceName: string;
  onPress: () => void;
}

export default function News({
  imageuri,
  title,
  subtext,
  sourceName,
  onPress,
}: NewsProps) {
  var date = new Date(subtext);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var now = new Date();
  var diffInHours = Math.abs(now.getTime() - date.getTime()) / 36e5;

  var publish_date = "";
  if (diffInHours < 24) {
    publish_date = `${sourceName}・${Math.floor(diffInHours)}時間前`;
  } else {
    publish_date = `${sourceName}・${year}/${month}/${day}`;
  }

  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={styles.moziBox}>
        <Text numberOfLines={3} style={styles.Text}>
          {title}
        </Text>
        <Text style={styles.subText}>{publish_date}</Text>
      </View>
      <View style={styles.gazoBox}>
        <Image
          style={{ width: 150, height: 100 }}
          source={{
            uri: imageuri,
          }}
        />
      </View>
    </TouchableOpacity>
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
    borderColor: "lightgray",
    borderWidth: 0.4,
    flexDirection: "row",
  },
  moziBox: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  gazoBox: {
    width: 150,
  },
  Text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "darkgray",
  },
});
