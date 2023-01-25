<script lang="ts">
import { RouterView, RouterLink } from "vue-router";

export default {
  components: {
    RouterView,
    RouterLink,
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (
        window.scrollY >= 100 &&
        !document.querySelector("#navbar")?.classList.contains("active")
      ) {
        console.log(window.scrollY);
        document.querySelector("#navbar")?.classList.add("active");
      }
      if (
        window.scrollY < 100 &&
        document.querySelector("#navbar")?.classList.contains("active")
      ) {
        document.querySelector("#navbar")?.classList.remove("active");
      }
    });
  },
};
</script>

<template>
  <header></header>
  <div class="nav-bar" id="navbar">
    <div class="group-link">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/create">Create</RouterLink>
    </div>
  </div>
  <div class="page-title">
    <div class="group-link">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/create">Create</RouterLink>
    </div>
  </div>
  <div class="container-page">
    <RouterView />
    <div class="sidebar-col">
      <div class="widget">
        <div class="widget-title">Search</div>
        <div class="widget-body">
          <div class="search">
            <input type="text" class="search-input" placeholder="Search..." />
            <button class="search-button">
              <i class="fa-regular fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="widget">
        <div class="widget-title">Kategori</div>
        <div class="widget-body">
          <div class="group-category">
            <div class="category">Inspirasi</div>
            <div class="category">News</div>
            <div class="category">Tips & Trik</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope>
@import url("https://fonts.googleapis.com/css?family=Rubik");
@import url("https://fonts.googleapis.com/css?family=Arimo");
header {
  height: 40px;
  width: 100%;
  background-color: #ff8a00;
}
.group-link {
  display: flex;
  margin: 0 110px 0 auto;
  width: fit-content;
  gap: 40px;
}
.group-link a {
  color: #222222;
  font-weight: 700;
  font-family: Rubik;
  text-decoration: none;
  transition: color 0.3s;
}
.page-title .group-link a {
  color: #fff;
  height: 100px;
  display: flex;
  align-items: center;
}
.group-link a:hover {
  color: #ff8a00;
}
.page-title {
  height: 685px;
  width: 100%;
  background-color: #222222;
}
.nav-bar {
  position: fixed;
  left: 0;
  top: -75px;
  box-shadow: 0 0 15px rgb(0 0 0 / 10%);
  height: 75px;
  width: 100%;
  transition: top 0.3s;
  z-index: 999;
  background: #fff;
  align-items: center;
  display: flex;
}
.nav-bar.active {
  top: 0px;
}
.sidebar-col {
  min-width: 33%;
  min-height: 100px;
  padding: 0 35px;
  box-sizing: border-box;
  gap: 55px;
  display: flex;
  flex-direction: column;
}
.container-page {
  display: flex;
  width: 1200px;
  margin: auto;
  box-sizing: border-box;
  padding: 100px 0 0 0;
}
.description {
  padding: 30px 35px 30px;
}
.widget {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 25px;
}
.widget-title {
  font-size: 24px;
  color: #222222;
  font-weight: 700;
  text-transform: capitalize;
  font-family: "Rubik";
}
.search {
  display: flex;
}
.search-input {
  height: 60px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border: 1px solid #e1e1e1;
  width: 100%;
  padding: 0 25px;
}
.search-button {
  background-color: #222222;
  min-width: 60px;
  height: 60px;
  color: #fff;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border: none;
}
.category {
  font-size: 16px;
  padding: 15px 0px;
  border-bottom: 1px solid #ebebeb;
}
@media screen and (max-width: 991px) {
  .container-page {
    width: 100%;
  }
  .main-col {
    width: 100%;
  }
  .sidebar-col {
    display: none;
  }
}
</style>
