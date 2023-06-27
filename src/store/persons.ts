import Person from '@/models/Person'
import { defineStore } from 'pinia'

export const usePersonsStore = defineStore({
  id: "persons",
  state: () => ({
    persons: [] as Person[],
  }),
  actions: {
    add(person: Person) {
      this.persons.push(person)
    },

    update(id: string, person: Person) {
      if (!id || !person) return;

      const index = this.findIndexById(id);

      if (index !== -1) {
        this.persons[index] = person;
      }
    },

    delete(id: string) {
      const index = this.findIndexById(id)

      if (index === -1) return

      this.persons.splice(index, 1)
    },

    findIndexById(id: string) {
      return this.persons.findIndex((item) => item.id === id)
    },
  },
})
