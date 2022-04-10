<template>
  <div id="app">
    <Header
        :currency="currency"
        @next-to-basket="nextToBasket"
    />
    <div class="filter-panel">
      <sort-product v-if="isShowListOrCart" :options="getSortOptions" @selected="sortProducts" />
      <group-product v-if="isShowListOrCart" :options="getGroupOptions" @selected-group="groupProducts" />
    </div>
    <List v-if="isShowListOrCart" :currency="currency"/>
    <Basket
        v-if="!isShowListOrCart"
        :currency="currency"
        @back-to-cart-list="backToCartList"
    />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import List from './components/List.vue';
import Basket from './components/Basket.vue';
import SortProduct from '@/components/SortProduct';
import GroupProduct from '@/components/GroupProduct';
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'App',
  data() {
    return {
      currency: '₽',
      isShowListOrCart: true
    };
  },
  components: {
    Header,
    List,
    Basket,
    SortProduct,
    GroupProduct,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapGetters({
      getSortOptions: 'getSortOptions',
      getGroupOptions: 'getGroupOptions'
    }),
  },
  methods: {
    ...mapActions({
      sortProductList: 'sortProductList',
      groupProductList: 'groupProductList'
    }),
    handleScroll() {
      let header = document.querySelector('.header')
      if (window.scrollY > 30) {
        header.classList.add('header-fixed');
      } else {
        header.classList.remove('header-fixed');
      }
    },
    nextToBasket(e) {
      this.isShowListOrCart = e
    },
    backToCartList(e) {
      this.isShowListOrCart = e
    },
    sortProducts(e) {
      this.sortProductList(e)
    },
    groupProducts(e) {
      this.groupProductList(e)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: italic;

  color: #2c3e50;
}
.filter-panel {
  display: flex;
}
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 210px;
  z-index: 10;
}
</style>
