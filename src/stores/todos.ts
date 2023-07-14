import type { TodoItem } from './types/todo'
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useTodoStore = defineStore('todos', () => {
  const todos = ref<TodoItem[]>([])
  const id = ref<number>(1)
  function addTodo(todo: TodoItem) {
    try {
      todos.value.push(todo)
      localStorage.setItem('todos', JSON.stringify(todos.value))
    } catch (error) {
      console.error(error)
    }
  }
  function getTodoList(): void {
    try {
      const localTodo = JSON.parse(localStorage.getItem('todos'))
      if (localTodo) {
        todos.value.push(...localTodo)
      } else {
        localStorage.setItem('todos', JSON.stringify([]))
      }
    } catch (error) {
      console.error(error)
    }
  }
  function deleteTodo(id: number) {
    todos.value.splice(
      todos.value.findIndex((item) => {
        item.id = id
      })
    ),
      1
  }
  return { addTodo, todos, getTodoList, deleteTodo, id }
})
