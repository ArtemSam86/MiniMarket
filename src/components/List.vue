<template>
  <div>
    <div class="product-list">
    <div
        :key="product.id"
        class="card"
        v-for="product in products"
        :style="{width: cardsWidth + '%'}"
    >
      <p class="card-title">{{ product.title }}</p>
      <img class="card-image" :src="product.image" alt="">
      <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

      <div class="count-units-position">
        <input
            :id="product.id"
            type="number"
            :placeholder="placeholder"
            @change="newProductFormation(product, $event.target.valueAsNumber)"
        >
        <span>{{ units }}</span>
        <button @click="addToCart(product.id)">{{ buttonTitle }}</button>
      </div>
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
    <scroll-to-top-list :is-show="true" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ScrollToTopList from "@/components/ScrollToTopList";

export default {
  name: 'Basket',
  props: {
    currency: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Введите количество',
    },
    titleModal: {
      type: String,
      default: 'Вы ввели не корректное количество или оставили поле ввода пустым! Введите любое число от 1 до 500',
    },
    units: {
      type: String,
      default: ' кг'
    },
    buttonTitle: {
      type: String,
      default: 'Жмякни уже...'
    }
  },
  components: { ScrollToTopList },
  data() {
    return {
      newProduct: null,
      idElement: null
    };
  },
  created() {
    this.setProductsLists();
  },
  computed: {
    ...mapGetters({
      getProductsList: 'getProductsList',
      getGroupProductsList: 'getGroupProductsList'
    }),
    styleModal() {
      return {
        'background-color': 'white',
        'padding': '20px',
        'font-size': '20px',
        'border-radius': '10px'
      }
    },
    products() {
      console.log(this.getGroupProductsList.length)
      return this.getGroupProductsList.length === 0 ? this.getProductsList : this.getGroupProductsList
    },
    cardsWidth() {
      let width = window.innerWidth;
      let count = 1;
      if (width > '840px') {
        count = 3;
      } else if ((width > '420px' && width < '840px')) {
        count = 2;
      } else if (width < '420px') {
        count = 1
      }

      return 100 / count;
    },
  },
  methods: {
    ...mapActions({
      setProductsLists: 'setProductsLists',
      setBasket: 'setBasket'
    }),
    closeModal() {
      this.clearInput(this.idElement)
    },
    newProductFormation(prod, value) {
      if (value && (value > 0 && value <= 500)) {
        const product = {
          id: prod.id,
          image: prod.image,
          price: (prod.price * value).toFixed(2),
          counts: value,
          title: prod.title
        }
        this.newProduct = product
      }
    },
    addToCart(id) {
      this.idElement = id
      if (this.newProduct) {
        this.setBasket(this.newProduct)
        this.clearInput(this.newProduct.id)
        this.newProduct = null
      } else {
        this.$modal.show('my-modal')
      }
    },
    clearInput(id) {
      document.getElementById(id).value = ''
    }
  }
};
</script>

<style scoped>
  .product-list {
    display: grid;
    /*grid-template-columns: 400px 400px 400px; - все комменты оставлены для тестирования*/
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    /*grid-template-rows: 100px 100px 100px;*/
    /*grid-column-gap: 20px;*/
    /*grid-row-gap: 20px;*/
    grid-gap: 20px 20px;
    grid-auto-columns: auto;
    padding: 10px;
    justify-content: center;
  }

  .card {
    display: grid;
    /* grid-template-columns: 100px 100px 100px 100px 100px 100px; */
    /* grid-template-rows: 100px 100px 100px 100px 100px 100px; */
     grid-template-rows: repeat(auto-fit, minmax(100px, 0em));
    /* grid-column-gap: 20px; */
     grid-row-gap: 10px;
    /* grid-gap: 20px 20px; */
    /*width: 100%;*/
    border-radius: 5px;
    background-color: bisque;
    text-align: center;
    padding: 10px;
    margin: 10px;
    justify-content: space-around;
    align-items: center;
    justify-items: center;
  }
  .card-image {
    width: 100%;
    border-radius: 20px;
    padding: 10px;
    height: 150px;
  }
  img:hover {
    transform: translate(3px, 3px);
    opacity: 0.6;
  }
  .card-title {
    padding: 10px;
    margin: 5px;
    font-size: 25px;
  }
  .card-price {
    padding: 10px;
    margin: 5px;
    font-size: 20px;
  }
  button {
    padding: 10px;
    margin: 5px;
    background-color: #fff;
    border-radius: 5px;
    border: none;
    color: #2c3e50;
    height: 40px;
    font-size: 20px;
    font-style: italic;
  }
  button:hover {
    background-color: bisque;
    border: 2px solid white;
    font-size: 16px;
  }
  input {
    padding: 5px;
    margin: 5px;
    background-color: #fff;
    border-radius: 5px;
    border: none;
    color: #2c3e50;
    height: 40px;
    width: 200px;
    font-size: 16px;
    font-style: italic;
    -webkit-appearance: none;
  }
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input:hover {
    background-color: bisque;
    border: 2px solid white;
  }
  input:focus {
    border: solid white;
  }
  span {
    font-size: 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  .count-units-position {
    display: flex;
    flex-direction: column;
    font-size: 25px;
    /*align-items: center;*/
    /*justify-content: center;*/
  }

</style>
