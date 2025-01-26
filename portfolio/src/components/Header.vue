<template>
  <header class="fixed-header">
    <div class="px-3 py-2 bg-dark text-white">
      <div class="container">
        <div
          class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        >
          <a
            href="/"
            class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
          >
            포트폴리오
          </a>

          <ul
            class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small"
          >
            <li>
              <a href="#aboutMe" class="nav-link text-white"> About Me </a>
            </li>
            <li>
              <a href="#skills" class="nav-link text-white"> Skills </a>
            </li>
            <li>
              <a href="#career" class="nav-link text-white"> Career </a>
            </li>
            <li>
              <a href="#projects" class="nav-link text-white"> Projects </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 헤더 하단에 그림자 */
}

body {
  margin-top: 60px; /* 헤더 높이만큼 공간 확보 */
}

.nav-link {
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ffc107; /* 호버 시 강조 색상 */
}

.container {
  max-width: 1200px;
}
</style>
