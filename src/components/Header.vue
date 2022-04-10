<template>
  <div class="header">
    <button
      @click="nextToBasket"
    >
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
        <g>
          <g>
            <g>
              <path d="m90,190h67.3v67.3c0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4v-67.3h67.3c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-67.3v-67.4c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v67.3h-67.3c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.2,20.5 20.4,20.5z"/>
              <path d="M475.4,10.8h-98.5c-11.3,0-20.4,9.1-20.4,20.4v280.8H36.9c-11.3,0-20.4,9.1-20.4,20.4c0,11.3,9.1,20.4,20.4,20.4h339.9     c11.3,0,20.4-9.1,20.4-20.4V51.7h78.1c11.3,0,20.4-9.1,20.4-20.4C495.8,20,486.6,10.8,475.4,10.8z"/>
              <path d="m129.1,363.4c-38.1,0-69.1,30.8-69.1,68.7s31,68.7 69.1,68.7c38.1,0 69.1-30.8 69.1-68.7s-31-68.7-69.1-68.7zm0,96.6c-15.6,0-28.3-12.5-28.3-27.9 0-15.4 12.7-27.9 28.3-27.9 15.6,0 28.3,12.5 28.3,27.9 0,15.4-12.7,27.9-28.3,27.9z"/>
              <path d="m306.1,363.4c-38.1,0-69.1,30.8-69.1,68.7s31,68.7 69.1,68.7c38.1,0 69.1-30.8 69.1-68.7s-31-68.7-69.1-68.7zm0,96.6c-15.6,0-28.3-12.5-28.3-27.9 0-15.4 12.7-27.9 28.3-27.9 15.6,0 28.3,12.5 28.3,27.9-5.68434e-14,15.4-12.7,27.9-28.3,27.9z"/>
            </g>
          </g>
        </g>
      </svg>
      <i class="count-goods">{{ countBasket }} шт</i>
      <i class="title-basket">Корзина</i>
      <i class="price-goods">{{ sumBasket }} {{ currency }}</i>
    </button>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'Header',
  props: {
    currency: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      cartPrice: 0,
    };
  },
  computed: {
    ...mapGetters({
      getCountAndSumOfBasket: 'getCountAndSumOfBasket'
    }),
    sumBasket() {
      return this.getCountAndSumOfBasket.sum
    },
    countBasket() {
      return this.getCountAndSumOfBasket.count
    }
  },
  methods: {
    nextToBasket() {
      this.$emit("next-to-basket", false);
    }
  }
}
</script>

<style scoped>
  .header {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 0fr));
    grid-gap: 20px 20px;
    grid-auto-columns: auto;
    justify-content: start;
    /*--------------------*/
    color: white;
    padding: 15px;
    margin: 5px;
    background-color: green;
    border-radius: 10px;
  }
  svg {
    width: 40px;
    height: 40px;
  }
  button {
    display: flex;
    /*grid-template-columns: repeat(auto-fit, minmax(35px, 0.35fr));*/
    /*grid-template-rows: repeat(auto-fit, minmax(20px, 0.35fr));*/
    grid-gap: 0 10px;
    justify-content: space-around;
    width: 180px;
    height: 80px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: bisque;
    align-items: center;
    justify-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
  button:hover {
    background-color: green;
    border: 2px solid bisque;
  }
  button:active {
    background-color: bisque;
  }
  i.count-goods {
    font-size: 15px;
    font-weight: bold;
  }
  i.price-goods {
    font-size: 15px;
    font-weight: bold;
  }
  .title-basket {
    font-size: 15px;
    font-weight: bold;
  }
</style>
