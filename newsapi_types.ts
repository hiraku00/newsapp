export type NewsItem = {
  urlToImage: string;
  title: string;
  publishedAt: string;
  url: string;
};

export type RootStackParamList = {
  News: undefined;
  Details: { article: NewsItem };
};
