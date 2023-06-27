<template>
  <div class="person-list">
    <div v-if="!persons.length" class="text-center">No data.</div>
    <div class="person-container">
      <div v-for="person in persons" :key="person.id" class="person-item">
        <div class="person-card">
          <h3 class="person-name">
            {{ person.name }}
            <img src="@/assets/edit.svg" height="25" class="edit-btn" @click="() => onEditBtnClick(person)" />
            <img src="@/assets/delete.svg" height="20" class="delete-btn" @click="() => onDeleteBtnClick(person)" />
          </h3>
          <div class="person-details">
            <div class="person-info">
              <span class="info-label">Email:</span>
              <span class="info-value">{{ person.email }}</span>
            </div>
            <div class="person-info">
              <span class="info-label">Phone:</span>
              <span class="info-value">{{ person.phone }}</span>
            </div>
            <div class="person-info">
              <span class="info-label">Created At:</span>
              <span class="info-value">{{ formatDate(person.createdAt) }}</span>
            </div>
            <div class="person-info">
              <span class="info-label">Description:</span>
              <span class="info-value">{{ person.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <PersonDialog
    :isOpen="isPersonDialogOpen"
    :person="personToEdit"
    @update:isOpen="updateIsPersonDialogOpen"
    @onSubmit="updatePerson"
  />

  <PromptDialog
    :isOpen="isPromptDialogOpen"
    :text="deletePromptText"
    @update:isOpen="updateIsPromptDialogOpen"
    @onSubmit="deletePerson"
  />
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue'
import Person from '@/models/Person'
import { usePersonsStore } from '@/store/persons'
import PersonDialog from '@/components/PersonDialog.vue'
import PromptDialog from '@/components/PromptDialog.vue'

const isPersonDialogOpen = ref(false)
const isPromptDialogOpen = ref(false)
const personToEdit = ref({} as Person)
const personsStore = usePersonsStore()
let deletePromptText = ''

// Define props using `defineProps`
defineProps({
  persons: {
    type: Array as PropType<Person[]>,
    required: true
  }
})

const updateIsPersonDialogOpen = (value: boolean) => {
  isPersonDialogOpen.value = value
}

const updateIsPromptDialogOpen = (value: boolean) => {
  isPromptDialogOpen.value = value
}

const updatePerson = (person: Person) => {
  personsStore.update(person.id, person)
}

const deletePerson = () => {
  personsStore.delete(personToEdit.value.id)
}

// Format date as string
const formatDate = (date: Date): string => {
  return date.toLocaleDateString()
}

const onEditBtnClick = (person: Person) => {
  personToEdit.value = person
  isPersonDialogOpen.value = true
}

const onDeleteBtnClick = (person: Person) => {
  deletePromptText = `Do you really want to delete ${person.name}`
  personToEdit.value = person
  isPromptDialogOpen.value = true
}
</script>

<style scoped>
.person-list {
  font-family: 'Roboto', sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
}

.person-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  gap: 10px;
}

.person-item {
  flex-basis: calc(50% - 5px);
}

.person-card {
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.person-name {
  position: relative;
  font-size: 22px;
  margin: 0;
  text-align: left;
}

.person-details {
  margin-top: 10px;
}

.person-info {
  text-align: left;
  margin-bottom: 5px;
}

.info-label {
  font-weight: bold;
  margin-right: 5px;
}

.info-value {
  display: inline-block;
  color: #666;
  text-align: right;
}

.edit-btn, .delete-btn {
  position: absolute;
  cursor: pointer;
}

.edit-btn:hover {
  filter: invert(63%) sepia(19%) saturate(987%) hue-rotate(96deg) brightness(98%) contrast(90%);
}

.delete-btn:hover {
  filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
}

.edit-btn {
  top: -2px;
  right: 22px;
}

.delete-btn {
  top: 0;
  right: -2px;
}

</style>
