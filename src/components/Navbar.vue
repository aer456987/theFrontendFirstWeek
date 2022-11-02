<template>
  <ul>
    <li class="d-sm-none">>sm</li>
    <li class="d-none d-sm-block d-md-none">sm</li>
    <li class="d-none d-md-block d-lg-none">md</li>
    <li class="d-none d-lg-block d-xl-none">lg</li>
    <li class="d-none d-xl-block">xl</li>
  </ul>
  <nav class="navbar navbar-light bg-white">
    <div class="container-fluid">
        <a class="navbar-brand logo" href="#">
          <img src="@/assets/img/logo.svg" alt="The Frontend 4th" class="w-100">
        </a>
        <button class="navbar-toggler order-1" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <button class="btn btn-warning rounded-pill fw-bold px-md-5 order-2 order-md-3">
          我要報名
        </button>
        <div class="collapse navbar-collapse me-2 order-3 order-md-2"
          id="navbarSupportedContent">
          <a class="navbar-brand d-none d-md-inline" href="#">THE F2E</a>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">關卡任務</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">競賽說明</a>
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
export default {
  name: 'Navbar',
  data() {
    return {
      test: 'tt222222222222tt',
    };
  },
};
</script>

<style lang="scss" scope>
.logo {
  width: 100%;
  max-width: 100%;
  margin-right: 0;
  @include media-sm() {
    max-width: 180px;
  }
  @include media-md() {
    max-width: 300px;
  }
}
</style>
