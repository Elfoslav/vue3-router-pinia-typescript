<template>
  <PersonForm @onSubmit="onSubmit" />
</template>

<script setup lang="ts">
import Person from '@/models/Person'
import PersonForm from '@/components/PersonForm.vue'
import { useRouter } from 'vue-router'
import { usePersonsStore } from '@/store/persons'

const router = useRouter()
const personsStore = usePersonsStore()

const onSubmit = (person: Person) => {
  personsStore.add(person)
  router.push('/persons')
}
</script>
