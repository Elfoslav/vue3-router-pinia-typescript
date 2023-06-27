<template>
  <transition appear name="fade">
    <div class="modal-overlay" v-if="isModalOpen" @click="handleClickOutside">
      <div class="modal-dialog" ref="modalRef">
        <div class="close-btn" @click="closeModal">
          <img src="@/assets/close.svg" width="25" />
        </div>
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch, EmitsOptions } from 'vue'
import Person from '@/models/Person'

const props = defineProps({
  isOpen: Boolean,
  person: Object as () => Person,
})

const isModalOpen = ref(props.isOpen)
const modalRef = ref<HTMLElement | null>(null)

const emit = defineEmits({
  onClose: () => true,
  'update:isOpen': (value: boolean) => value,
} as EmitsOptions)

const closeModal = () => {
  emit('update:isOpen', false)
  emit('onClose')
}

// When props.isOpen is changed, we need to update isModalOpen
watch(() => props.isOpen, (newVal) => {
  isModalOpen.value = newVal
})

// Close the dialog when clicking outside the modal
const handleClickOutside = (event: MouseEvent) => {
  // Check if the click target is outside of the modal
  if (modalRef.value && !modalRef.value?.contains(event.target as Node)) {
    if (isModalOpen.value) {
      closeModal()
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-dialog {
  position: relative;
  background-color: #fff;
  max-width: 72%;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.modal-dialog .close-btn {
  display: inline-block;
  position: absolute;
  top: -25px;
  right: -27px;
  cursor: pointer;
  border-radius: 50%;
  padding: 7px 8px 1px 8px;
  background-color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
