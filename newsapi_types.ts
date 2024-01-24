export type NewsItem = {
  urlToImage: string;
  title: string;
  publishedAt: string;
  url: string;
  source: { name: string };
};

export type RootStackParamList = {
  NewsScreen: undefined;
  DetailScreen: { article: NewsItem };
  WeatherScreen: undefined;
};
