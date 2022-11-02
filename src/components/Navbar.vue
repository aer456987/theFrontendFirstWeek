<template>
  <ScreenModule />
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div class="container-fluid">
      <h1 class="text-dark">
        <a class="nav-link active" aria-current="page" href="#">THE F2E</a>
      </h1>

      <div class="order-2 order-2 order-sm-1 order-lg-2 w-100 w-sm-auto ms-auto ms-lg-0 me-2">
        <div>
          <button class="btn btn-secondary px-4 rounded-pill me-2 mb-2 mb-sm-0 w-100 w-sm-auto">
            註冊報名
          </button>
          <button class="btn btn-secondary px-4 rounded-pill w-100 w-sm-auto">立即登入</button>
        </div>
      </div>

      <button class="navbar-toggler order-1 order-sm-2 mb-2 mb-sm-0" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse order-3 order-lg-1" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">關卡資訊</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">攻略資源</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">求職專區</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- <RouterLink to="/">Home</RouterLink> |
  <RouterLink to="/2324">Ho234me</RouterLink> |
  <RouterLink to="/about">About</RouterLink> -->
</template>

<script>
import ScreenModule from '@/components/ScreenModule.vue';

export default {
  name: 'Navbar',
  data() {
    return {
      test: 'tt222222222222tt',
    };
  },
  components: { ScreenModule },
};
</script>

<style lang="scss" scope>
// .logo {
//   width: 100%;
//   max-width: 100%;
//   margin-right: 0;
//   @include media-sm() {
//     max-width: 180px;
//   }
//   @include media-md() {
//     max-width: 300px;
//   }
// }
</style>
