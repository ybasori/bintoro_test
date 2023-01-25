<script lang="ts">
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    articles: (state: any) => state.article.articles,
    isLoading: (state: any) => state.article.isLoadingGetArticles,
  }),
  data() {
    return {
      total: 0,
    };
  },
  methods: {
    ...mapActions(["getAllArticles"]),
    addTotal() {
      this.total += 5;
    },
  },
  mounted() {
    let observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      this.getAllArticles();
      this.addTotal();
    });
    let target = document.querySelector("#more");
    if (target) observer.observe(target);
  },
};
</script>
<template>
  <div class="main-col">
    <div
      v-for="(item, index) in articles.filter((_:any, index:number)=>index<total)"
      v-bind:key="index"
      class="row-content"
    >
      <div class="item-inner">
        <img
          src="https://bintoroarchitect.co.id/wp-content/uploads/2021/08/Harga-Jasa-Desain-Rumah-3D.webp"
          class="img-fluid"
        />
        <div class="description">
          <div class="title">
            <RouterLink :to="`/posts/${item.id}`">{{ item.title }}</RouterLink>
          </div>
          <div class="info">September 1, 2021, newarch 0 Comments</div>
          <div class="summary">
            {{ item.body }}
          </div>
        </div>
      </div>
    </div>
    <div id="more">&nbsp;</div>
  </div>
</template>
<style scope>
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
.title a {
  font-family: "Rubik";
  font-size: 24px;
  color: #2f2f2f;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s;
}
.title a:hover {
  color: #ff8a00;
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
