<template>
  <div class="w-100 border">
    <div class="container bg-warning-light border">
      <Navbar />
      <RouterView class="border" />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar },
  data() {
    return {
      test: '1test',
    };
  },
};
</script>

<style lang="scss">
</style>
