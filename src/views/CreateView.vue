<script lang="ts">
import { mapActions, mapState } from "vuex";

export default {
  components: {},
  computed: mapState({
    articles: (state: any) => state.article.articles,
    isLoading: (state: any) => state.article.isLoadingCreateArticle,
  }),
  data() {
    return {
      form: {
        title: "",
        body: "",
      },
    };
  },
  watch: {
    // whenever question changes, this function will run
    articles() {
      this.form = {
        title: "",
        body: "",
      };
    },
  },
  methods: {
    ...mapActions(["postArticle", "getAllArticles"]),
    onSubmit() {
      this.postArticle(this.form);
    },
  },
  mounted() {
    this.getAllArticles();
  },
};
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-9 mx-auto pt-5">
        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input
              v-model="form.title"
              type="text"
              id="title"
              class="form-control"
              placeholder="Title"
            />
          </div>
          <div class="mb-3">
            <label for="body" class="form-label">Content</label>
            <textarea
              v-model="form.body"
              type="text"
              id="body"
              class="form-control"
              placeholder="Content"
            ></textarea>
          </div>
          <button type="submit" :disabled="isLoading" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-md-9 mx-auto">
        <table class="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in articles.filter((_:any, index: number) => index < 10)"
              v-bind:key="index"
            >
              <td>{{ index + 1 }}.</td>
              <td>{{ item.title }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style></style>
