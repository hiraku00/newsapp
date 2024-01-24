import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import News from "../components/News";
import { useEffect, useState } from "react";
import axios from "axios";
import { NEWS_API_KEY } from "@env";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, NewsItem } from "../newsapi_types";

type NewsScreenNavigationProp = StackNavigationProp<RootStackParamList, "NewsScreen">;

type Props = {
  navigation: NewsScreenNavigationProp;
};

// keyword=tesla, from=2024-01-20
const URI = `https://newsapi.org/v2/everything?q=tesla&from=2024-01-20&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;

export default function NewsScreen({ navigation }: Props) {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const response = await axios.get(URI);
    // debug
    console.log(response);
    setNews(response.data.articles);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <News
            imageuri={item.urlToImage}
            title={item.title}
            subtext={item.publishedAt}
            sourceName={item.source.name}
            onPress={() => navigation.navigate("DetailScreen", { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
