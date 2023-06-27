<template>
  <div class="form-container">
    <form @submit="handleSubmit" class="form">
      <div class="form-group">
        <label for="name" class="form-label">Name</label>
        <input v-model="formData.name" type="text" id="name" class="form-input" required>
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input v-model="formData.email" type="email" id="email" class="form-input">
      </div>
      <div class="form-group">
        <label for="phone" class="form-label">Phone</label>
        <input v-model="formData.phone" type="tel" id="phone" class="form-input">
      </div>
      <div class="form-group">
        <label for="description" class="form-label">Description</label>
        <textarea v-model="formData.description" id="description" class="form-textarea"></textarea>
      </div>
      <button type="submit" class="button button-green">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, EmitsOptions } from 'vue'
import Person from '@/models/Person'

const props = defineProps({
  person: Object as () => Person,
})

const generatedId = Date.now().toString()

const formData = ref<Person>({
  id: props.person?.id || generatedId,
  name: props.person?.name || '',
  email: props.person?.email || '',
  phone: props.person?.phone || '',
  description: props.person?.description || '',
  createdAt: props.person?.createdAt || new Date(),
})

const emit = defineEmits({
  onSubmit: () => true,
} as EmitsOptions)

const handleSubmit = (event: Event) => {
  event.preventDefault()
  emit('onSubmit', formData.value)
}
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
}

.form-group {
  margin-bottom: 10px;
}

.form-label {
  display: block;
  font-weight: bold;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
