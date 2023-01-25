export type IArticle = {
  title: string;
  body: string;
};

export interface IArticleState {
  isLoadingCreateArticle: boolean;
  errorCreateArticle: unknown;
  articles: IArticle[];
  isLoadingGetArticles: boolean;
  errorGetArticles: unknown;
  isLoadingGetArticle: boolean;
  article: IArticle | null;
  errorGetArticle: unknown;
}
