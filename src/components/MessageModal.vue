<template>
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
</template>

<script>
export default {
  name: 'MessageModal',
  props: {
    titleModal: {
      type: String,
      default: 'Вы ввели не корректное количество или оставили поле ввода пустым! Введите любое число от 1 до 500'
    },
    styleModal: {
      type: Object,
      default: {
        'background-color': 'white',
        'padding': '20px',
        'font-size': '20px',
        'border-radius': '10px'
      }
    },
    idElement: {
      type: Number,
      required: true
    }
  },
  methods: {
    showModal() {
      this.$modal.show('my-modal')
    },
    closeModal() {
      this.clearInput(this.idElement);
    },
    clearInput(id) {
      document.getElementById(id).value = ''
    }
  }
}
</script>

<style scoped>

</style>
