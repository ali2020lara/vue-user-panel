<template>
  <div class="section-todos">
    <h1>TODOS LIST</h1>
    <div class="section-todos-list">
      <todo-card :list-todos="listTodos" @todos="todosList" @editTodo="editTodo" @deleteTodo="deleteTodo"></todo-card>
      <todo-doing-card :list-todos="listTodos" @todos="todosList" @editTodo="editTodo" @deleteTodo="deleteTodo"></todo-doing-card>
      <todo-done-card :list-todos="listTodos" @todos="todosList" @editTodo="editTodo" @deleteTodo="deleteTodo"></todo-done-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import TodoCard from '@/components/Todos/todoCard.vue';
import TodoDoingCard from '@/components/Todos/todoDoingCard.vue';
import TodoDoneCard from '@/components/Todos/todoDoneCard.vue';
const listTodos = ref([])
function deleteTodo(params:type) {
  listTodos.value = listTodos.value.filter(todo=> todo.id !== params.id)
  addLocalStorage(listTodos.value) 
}
function editTodo(params: type) {
  listTodos.value = listTodos.value.map(todo => 
    todo.id === params.id ? params : todo
  );
  addLocalStorage(listTodos.value)
}
function todosList(params: type) {
  listTodos.value = [...listTodos.value, params];
  addLocalStorage(listTodos.value);
}
function addLocalStorage(params:type) {
  localStorage.setItem('listTodos',JSON.stringify(params))
}
function getLocalStorage() {
  return JSON.parse(localStorage.getItem('listTodos') || '[]')
}
function getListTodos() {
  listTodos.value = getLocalStorage()
}
onMounted(()=>{
  getListTodos()
})
</script>

<style lang="scss">
.section-todos {
.notFound {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
  h1 {}
  .section-todos-list {
    display: flex;
    overflow: auto;
    align-items: flex-start;
    gap: 20px;

    .section-todos-list__items {
      background-color: rgb(var(--v-theme-whiteBg));
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      min-width: 290px;
      max-height: 100%;

      .section-todos-list__items-header {
        padding: 12px;
        width: 100%;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        border-bottom: 1px solid rgb(var(--v-theme-blueBorder));

        span {}
      }

      .section-todos-list__items-body {
        display: flex;
        padding: 0 12px;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        gap: 8px;

        .section-todos-list__item {
          width: 100%;
          border-radius: 10px;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          &.add-todo {
            flex-direction: column;
            gap: 8px;

            textarea {
              background-color: rgb(var(--v-theme-blueBorder));
              width: 100%;
              border: none;
              outline: none;
              resize: none;
              padding: 8px;
              border-radius: 10px;

              &:focus,
              &:active {
                border: none;
                outline: none;
              }
            }

            .error-input {
              color: red;
              font-size: 16px;
              font-weight: 400;
            }
          }

          &.section-todos-list__item-hover {
            background-color: rgb(var(--v-theme-blueBorder));
            cursor: pointer;
          }

          .section-todos-list__item-buttons {
            display: flex;
            align-items: center;
            gap: 4px;
            visibility: hidden;
            &.show-btns {
              visibility: visible;
            }
          }
        }
      }

      .section-todos-list__items-footer {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px;
        width: 100%;
        border-top: 1px solid rgb(var(--v-theme-blueBorder));
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;

        .section-todos-list__items-footer-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 6px;
          border-radius: 10px;

          &.active {
            background-color: rgb(var(--v-theme-blueBorder));
            cursor: pointer;
          }

          span {}

          button {}
        }
      }
    }
  }
}
</style>