<template>
  <PersonsList :persons="persons" />
</template>

<script setup lang="ts">
import Person from '@/models/Person'
import { usePersonsStore } from '@/store/persons'
import PersonsList from '@/components/PersonsList.vue'

const personsStore = usePersonsStore()
const persons = personsStore.persons

if (persons.length === 0) {
  const person1 = { id: "1", name: 'Test 1', createdAt: new Date() } as Person
  const person2 = { id: "2", name: 'Test 2', createdAt: new Date() } as Person
  personsStore.add(person1)
  personsStore.add(person2)
}
</script>
