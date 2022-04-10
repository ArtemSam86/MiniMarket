<template>
  <div>
    <div class="btn-back-container">
      <button
          class="btn-back"
          @click="backToCartList"
      >
        {{ titleButton }}
      </button>
    </div>
    <div v-show="cartList.length">
      <sort-product
          :options="getSortOptions"
          @selected="sortProducts"
      />
    </div>
    <div>
      <div
          :key="item.id"
          class="cart-list-basket"
          v-for="item in cartList"
      >
        <button
            class="btn-delete-product"
            @click="deleteProduct(item)"
        >X</button>
        <img class="cart-image" :src="item.image" alt="">
        <p class="cart-title">{{ item.title }}</p>
        <input
            :id="item.id"
            class="cart-count"
            :value="item.counts"
            type="number"
            @change="newProductFormation(item, $event.target.valueAsNumber)"
        >
        <p class="cart-price">{{ item.price }}</p>
        <p class="cart-currency">{{ currency }}</p>
      </div>
    </div>
    <scroll-to-top-list :is-show="cartList.length > 0" />
    <div class="header-cart-is-empty">
      <h3 v-show="!cartList.length">Ваша корзина пуста</h3>
    </div>
    <div>
      <modal
          :styles="styleModal"
          name="my-modal"
          height="auto"
          @before-close="closeModal"
      >
        {{ titleModal }}
      </modal>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import SortProduct from '@/components/SortProduct';
import ScrollToTop from '@/components/ScrollToTopList';
import ScrollToTopList from "@/components/ScrollToTopList";

export default {
  name: 'Cart',
  props: {
    currency: {
      type: String,
      required: true
    },
    titleButton: {
      type: String,
      default: 'Назад'
    },
    titleModal: {
      type: String,
      default: 'Вы ввели не корректное количество или оставили поле ввода пустым! Введите любое число от 1 до 500',
    },
  },
  data () {
    return {
      sortKey: 0,
      idElement: null
    }
  },
  components: {ScrollToTopList, SortProduct, ScrollToTop },
  computed: {
    ...mapGetters({
      getBasket: 'getBasket',
      getSortOptions: 'getSortOptions'
    }),
    styleModal() {
      return {
        'background-color': 'white',
        'padding': '20px',
        'font-size': '20px',
        'border-radius': '10px'
      }
    },
    cartList() {
      return this.getBasket;
    }
  },
  methods: {
    ...mapActions({
      setBasket: 'setBasket',
      deleteProductFromBasket: 'deleteProductFromBasket'
    }),
    closeModal() {
      this.clearInput(this.idElement)
    },
    clearInput(id) {
      document.getElementById(id).value = ''
    },
    sortProducts(e) {
      this.sortKey = e
      this.sortList(e);
    },
    sortList(e) {
      if (e === 0) {
        this.getBasket.sort((a, b) => {
          return a.price - b.price
        });
      } else if (e === 1) {
        this.getBasket.sort((a, b) => {
          return b.price - a.price
        });
      } else if (e === 2) {
        this.getBasket.sort((a, b) => {
          const x = a.title.toLowerCase();
          const y = b.title.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
      } else if (e === 3) {
        this.getBasket.sort((a, b) => {
          const x = a.title.toLowerCase();
          const y = b.title.toLowerCase();
          if (x > y) {
            return -1;
          }
          if (x < y) {
            return 1;
          }
          return 0;
        });
      }
    },
    backToCartList() {
      this.$emit("back-to-cart-list", true);
    },
    newProductFormation(prod, value) {
      if (value && (value > 0 && value <= 500)) {
        const product = {
          id: prod.id,
          image: prod.image,
          price: (prod.price / prod.counts * value).toFixed(2),
          counts: value,
          title: prod.title
        }
        this.setBasket(product)
        this.sortList(this.sortKey);
      } else {
        this.idElement = prod.id
        this.$modal.show('my-modal')
      }
    },
    deleteProduct(product) {
      this.deleteProductFromBasket(product);
    }
  }
};
</script>

<style>
.cart-list-basket {
  display: grid;
  /*grid-template-columns: 100px 100px 100px 100px;*/
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  /*grid-template-rows: 100px 100px 100px;*/
  /*grid-column-gap: 20px;*/
  /*grid-row-gap: 20px;*/
  grid-gap: 20px 20px;
  /*grid-auto-columns: auto;*/
  padding: 10px;
  align-items: center;
  justify-items: center;
  /*justify-content: center;*/
  background-color: bisque;
  border-radius: 10px;
  margin: 20px;
}
.cart-list-basket:hover {
  /*transform: translate(3px, 3px);*/
  /*width: 100%;*/
  transform: translate(20px);
  /*opacity: 0.6;*/
}
.cart-image {
  width: 80%;
  border-radius: 10px;
  /*margin: 10px;*/
}
.cart-count {
  font-size: 25px;
  width: 80px;
  height: 40px;
  text-align: center;
}
.cart-title {
  font-size: 25px;
}
.cart-price, .cart-currency {
  font-size: 25px;
}
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.header-cart-is-empty {
  font-size: 25px;
  display: flex;
  justify-content: center;
  margin: 20px;
}
.btn-back-container {
  display: flex;
  justify-content: center;
  margin: 20px;
}
.btn-back {
  font-size: 25px;
  height: 40px;
  width: 100px;
  border: 2px solid green;
  border-radius: 5px;
  color: green;
  background-color: white;
}
.btn-back:hover {
  color: white;
  background-color: green;
}
.btn-delete-product {
  font-size: 20px;
  height: 40px;
  width: 40px;
  border: 2px solid green;
  border-radius: 25px;
  color: green;
  background-color: white;
}
.btn-delete-product:hover {
  color: white;
  background-color: green;
}
</style>
