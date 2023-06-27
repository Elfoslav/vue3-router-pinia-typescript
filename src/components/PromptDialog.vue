<template>
  <Dialog :isOpen="isOpen" @update:isOpen="updateIsOpen">
    <div class="prompt-text">{{ text }}</div>
    <div class="flex flex-gap-20">
      <button class="button button-green" @click="onSubmit">Confirm</button>
      <button class="button button-gray" @click="onClose">Cancel</button>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { EmitsOptions } from 'vue'
import Person from '@/models/Person'
import Dialog from '@/components/Dialog.vue'

defineProps({
  isOpen: Boolean,
  text: String,
  person: Object as () => Person,
})

const emit = defineEmits({
  onSubmit: () => true,
  onClose: () => true,
  'update:isOpen': (value: boolean) => value,
} as EmitsOptions)

const updateIsOpen = (isOpen: boolean) => {
  emit('update:isOpen', isOpen)
}

const onSubmit = (person: Person) => {
  updateIsOpen(false)
  emit('onSubmit', person)
}

const onClose = () => {
  emit('update:isOpen', false)
  emit('onClose')
}
</script>

<style scoped>
.prompt-text {
  font-weight: bold;
  margin-bottom: 15px;
}
</style>
