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
  name: "GroupProduct",
  props: {
    options: {
      type: Array,
      required: true
    },
    titleSelect: {
      type: String,
      default: 'Группировать:'
    }
  },
  data() {
    return {
      selected: -1
    }
  },
  created() {
    this.$emit('selected-group', this.selected)
  },
  computed: {
    hideTitle() {
      return window.innerWidth < 480 ? false : true
    },
  },
  methods: {
    selectOptions() {
      this.$emit('selected-group', this.selected)
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
