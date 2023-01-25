import type { IArticleState } from "./article/article.type";

export type ICommit = (mutation: string, payload?: unknown) => void;
export interface IStore {
  article: IArticleState;
}
