import React from "react";
import { WebView } from "react-native-webview";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../newsapi_types";

type DetailScreenRouteProp = RouteProp<RootStackParamList, "DetailScreen">;

type Props = {
  route: DetailScreenRouteProp;
};

function DetailScreen({ route }: Props) {
  const { article } = route.params;

  return <WebView style={styles.container} source={{ uri: article.url }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

export default DetailScreen;
