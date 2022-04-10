<template>
  <div class="select-back-container">
    <span v-if="hideTitle" class="title-sort">{{ titleSelect }}</span>
    <select class="select-back" v-model="selected" @change="selectOptions">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SortProduct",
  props: {
    options: {
      type: Array,
      required: true
    },
    titleSelect: {
      type: String,
      default: 'Сортировать по:'
    }
  },
  data() {
    return {
      selected: 0
    }
  },
  created() {
    this.$emit('selected', this.selected)
  },
  computed: {
    hideTitle() {
      return window.innerWidth < 480 ? false : true
    },
  },
  methods: {
    selectOptions() {
      this.$emit('selected', this.selected)
    }
  }
}
</script>

<style scoped>
.select-back-container {
  display: flex;
  margin: 20px;
  align-items: center;
}
.select-back {
  font-size: 20px;
  height: 40px;
  width: 250px;
  border: 2px solid green;
  border-radius: 5px;
  color: green;
  background-color: white;
}
.select-back:hover {
  color: white;
  background-color: green;
}
.title-sort {
  font-size: 20px;
  margin: 5px;
  color: green;
  background-color: white;
}
</style>
