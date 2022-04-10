<template>
  <div
      class="container-scroll-to-top"
      v-show="isShow"
  >
    <button
        class="btn-scroll-to-top"
        @click="scrollToTop"
    >⬆</button>
  </div>
</template>

<script>
export default {
  name: 'ScrollToTopList',
  props: {
    isShow: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    scrollToTop() {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0)
      }
    }
  }
}
</script>

<style scoped>
.btn-scroll-to-top {
  margin: 20px;
  font-size: 20px;
  height: 40px;
  width: 40px;
  border: 2px solid green;
  border-radius: 25px;
  color: green;
  background-color: white;
}
.btn-scroll-to-top:hover {
  color: white;
  background-color: green;
}
.container-scroll-to-top {
  display: flex;
  justify-content: center
}
</style>
