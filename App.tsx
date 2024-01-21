import { FlatList, StyleSheet, View } from "react-native";
import News from "./components/News";
import { useEffect, useState } from "react";
import axios from "axios";
import { NEWS_API_KEY } from "@env";

const URI = `https://newsapi.org/v2/everything?q=tesla&from=2024-01-19&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;

type NewsItem = {
  urlToImage: string;
  title: string;
  publishedAt: string;
};

export default function App() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const response = await axios.get(URI);
    console.log(response)
    setNews(response.data.articles);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <News
            imageuri={item.urlToImage}
            title={item.title}
            subtext={item.publishedAt}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
