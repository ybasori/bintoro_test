<script lang="ts">
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    article: (state: any) => state.article.article,
  }),
  methods: {
    ...mapActions(["getArticle"]),
  },
  mounted() {
    this.getArticle(this.$route.params.id);
  },
};
</script>
<template>
  <div class="main-col">
    <div v-if="article !== null" class="row-content">
      <div class="item-inner">
        <img
          src="https://bintoroarchitect.co.id/wp-content/uploads/2021/08/Harga-Jasa-Desain-Rumah-3D.webp"
          class="img-fluid"
        />
        <div class="description">
          <div class="title">
            {{ article.title }}
          </div>
          <div class="info">September 1, 2021, newarch 0 Comments</div>
          <div class="summary">
            {{ article.body }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.main-col {
  min-width: 67%;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 60px;
}
.row-content {
  box-shadow: 0 0 21px rgb(0 0 0 / 21%);
  width: 100%;
}
.title {
  font-family: "Rubik";
  font-size: 24px;
  color: #2f2f2f;
  font-weight: 700;
  text-decoration: none;
}
.info {
  font-family: "Arimo";
  font-weight: 400;
  color: #777777;
}
.summary {
  font-family: "Arimo";
  font-weight: 400;
  color: #555555;
  margin: 0 0 16px;
}
.item-inner {
  display: flex;
  flex-direction: column;
}
</style>
