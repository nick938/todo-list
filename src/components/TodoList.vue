<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useTodoStore } from '@/stores/todos'
const { todos, addTodo, getTodoList, deleteTodo } = useTodoStore()
const value = ref('')

function addTodos() {
  let id = Number(JSON.parse(localStorage.getItem('id') || '1'))
  if (value.value.trim()) addTodo({ isCompleted: false, content: value.value.trim(), id: id++ })
  else {
    alert('不能输入非空字符')
  }
  value.value = ''
  localStorage.setItem('id', JSON.stringify(id))
}
function toogleTodoItem(id: number) {
  for (const todo of todos) {
    if (todo.id == id) todo.isCompleted = !todo.isCompleted
  }
  localStorage.setItem('todos', JSON.stringify(todos))
}
onMounted(() => {
  getTodoList()
  // todos.push()
})
</script>
<template>
  <div>
    <input type="text" name="" v-model="value" placeholder="请输入你要完成的事！" />
    <button @click="addTodos">提交</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span @click="toogleTodoItem(todo.id)" :class="todo.isCompleted ? 'complete' : ''">{{
          todo.content
        }}</span>
        <button @click="deleteTodo(todo.id)">x</button>
      </li>
    </ul>
  </div>
  <code>tips: 点击可以完成或者取消完成</code>
</template>
<style scoped>
li {
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
li span.complete {
  text-decoration: line-through;
  color: red;
}
ul {
  padding: 0;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
