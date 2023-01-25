import type { ICommit } from "../store.type";
import type { IArticle, IArticleState } from "./article.type";
import axios from "axios";

const state = () => ({
  isLoadingCreateArticle: false,
  errorCreateArticle: null,
  isLoadingGetArticles: false,
  articles: [],
  errorGetArticles: null,
  isLoadingGetArticle: false,
  article: null,
  errorGetArticle: null,
});

const mutations = {
  loadingCreateArticle(state: IArticleState) {
    state.isLoadingCreateArticle = true;
  },
  successCreateArticle(state: IArticleState, payload: IArticle) {
    state.isLoadingCreateArticle = false;
    state.articles = [payload, ...state.articles];
  },
  errorCreateArticle(state: IArticleState, payload: unknown) {
    state.isLoadingCreateArticle = false;
    state.errorCreateArticle = payload;
  },
  loadingGetArticles(state: IArticleState) {
    state.isLoadingGetArticles = true;
  },
  getArticles(state: IArticleState, payload: IArticle[]) {
    state.isLoadingGetArticles = false;
    state.articles = [...state.articles, ...payload];
  },
  errorGetArticles(state: IArticleState, payload: unknown) {
    state.isLoadingGetArticles = false;
    state.errorGetArticles = payload;
  },
  loadingGetArticle(state: IArticleState) {
    state.isLoadingGetArticle = true;
  },
  getArticle(state: IArticleState, payload: IArticle) {
    state.isLoadingGetArticle = false;
    state.article = payload;
  },
  errorGetArticle(state: IArticleState, payload: unknown) {
    state.isLoadingGetArticle = false;
    state.errorGetArticle = payload;
  },
};
const actions = {
  async postArticle({ commit }: { commit: ICommit }, payload: IArticle) {
    try {
      commit("loadingCreateArticle");
      const result = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      commit("successCreateArticle", result.data);
    } catch (err) {
      commit("errorCreateArticle", err);
    }
  },
  async getAllArticles({ commit }: { commit: ICommit }) {
    try {
      commit("loadingGetArticles");
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      commit("getArticles", result.data);
    } catch (err) {
      commit("errorGetArticles", err);
    }
  },
  async getArticle({ commit }: { commit: ICommit }, id: number) {
    try {
      commit("loadingGetArticle");
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      commit("getArticle", result.data);
    } catch (err) {
      commit("errorGetArticle", err);
    }
  },
};
const getters = {
  articles(state: IArticleState) {
    return state.articles;
  },
  article(state: IArticleState) {
    return state.article;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
