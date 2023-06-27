<template>
  <Dialog :isOpen="isOpen" @update:isOpen="updateIsOpen">
    <PersonForm :person="person" @onSubmit="onSubmit" />
  </Dialog>
</template>

<script setup lang="ts">
import { EmitsOptions } from 'vue'
import Person from '@/models/Person'
import PersonForm from '@/components/PersonForm.vue'
import Dialog from '@/components/Dialog.vue'

defineProps({
  isOpen: Boolean,
  person: Object as () => Person,
})

const emit = defineEmits({
  onSubmit: () => true,
  'update:isOpen': (value: boolean) => value,
} as EmitsOptions)

const updateIsOpen = (isOpen: boolean) => {
  emit('update:isOpen', isOpen)
}

const onSubmit = (person: Person) => {
  updateIsOpen(false)
  emit('onSubmit', person)
}
</script>
