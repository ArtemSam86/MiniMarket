import api from '../../api/products.js';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import {sortList} from "@/plugins/sortList";
import {groupList} from "@/plugins/groupList";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numberOfItemsInTheCart: 0,
    totalAmount: 0,
    productsList: [],
    groupProductsList: [],
    basket: [],
    quantityAndAmountOfTheBasket: null,
    sortOptions: [
      { text: 'Возрастанию цены', value: 0 },
      { text: 'Убыванию цены', value: 1 },
      { text: 'А - Я', value: 2 },
      { text: 'Я - А', value: 3 }
    ],
    groupOptions: [
      { text: 'Все', value: -1 },
      { text: 'Овощи', value: 0 },
      { text: 'Фрукты', value: 1 },
      { text: 'Мясо', value: 2 },
      { text: 'Выпечка', value: 3 }
    ]
  },
  getters: {
    getGroupOptions: state=> state.groupOptions,
    getSortOptions: state => state.sortOptions,
    getNumberOfItemsInTheCart: state => state.numberOfItemsInTheCart,
    getTotalAmount: state => state.totalAmount,
    getProductsList: state => state.productsList,
    getGroupProductsList: state => state.groupProductsList,
    getBasket: state => state.basket,
    getCountAndSumOfBasket: (state) => {
      const count = state.basket.length
      const sum = state.basket.map((item) => {
        return item.price
      }).reduce((sum, current) => {
        return parseFloat(sum) + parseFloat(current)
      }, 0)
      const countSum = {
        count: count,
        sum: parseFloat(sum).toFixed(2)
      }
      return countSum
    },
  },
  mutations: {
    GROUP_PRODUCTS_LIST(state, payload) {
      state.groupProductsList = groupList(payload, state.productsList);
    },
    SORT_PRODUCTS_LIST(state, payload) {
      if (state.groupProductsList.length > 0) {
        state.groupProductsList = sortList(payload, state.groupProductsList);
      } else {
        state.productsList = sortList(payload, state.productsList);
      }
    },
    DELETE_PRODUCT_FROM_BASKET(state, payload) {
      const index = state.basket.findIndex(n => n.id === payload.id);
      if (index !== -1) {
        state.basket.splice(index, 1);
      }
    },
    SET_BASKET(state, payload) {
      console.log(payload)
      if (state.basket.length === 0) {
        state.basket.push(payload)
      } else {
        const value = state.basket.find(item => item.id === payload.id)
        if (!value) {
          state.basket.push(payload)
        } else {
          state.basket = state.basket.map((item) => {
            return item.id === payload.id ? {
              id: item.id,
              title: item.title,
              price: payload.price,
              counts: payload.counts,
              image: item.image
            } : item
          })
        }
      }
    },
    SET_PRODUCTS_LIST(state, payload) {
      state.productsList = payload
    },
    SET_NUMBER_OF_ITEMS_IN_CART(state, payload) {
      state.numberOfItemsInTheCart = payload
    },
    SET_TOTAL_AMOUNT(state, payload) {
      state.totalAmount = payload
    }
  },
  actions: {
    groupProductList({ commit }, payload) {
      commit('GROUP_PRODUCTS_LIST', payload)
    },
    sortProductList({ commit }, payload) {
      commit('SORT_PRODUCTS_LIST', payload)
    },
    deleteProductFromBasket({ commit }, payload) {
      commit("DELETE_PRODUCT_FROM_BASKET", payload)
    },
    setBasket({ commit }, payload) {
      commit("SET_BASKET", payload)
    },
    setNumberOfItemsInTheCart({ commit }, payload) {
      commit("SET_NUMBER_OF_ITEMS_IN_CART", payload)
    },
    setTotalAmount({ commit }, payload) {
      commit("SET_TOTAL_AMOUNT", payload)
    },
    async setProductsLists({ commit }) {
      axios
          .get("http://localhost:3008")
          .then(({ data }) => {
            commit("SET_PRODUCTS_LIST", data);
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
            commit("SET_PRODUCTS_LIST", api.getProductsList());
          });
    },
  },
  modules: {
  }
})
