<template>
  <div class="section-todos-list__items">
    <div class="section-todos-list__items-header">
      <span>To Do</span>
    </div>
    <div class="section-todos-list__items-body">
      <v-hover v-for="listTodo in props.listTodos" :key="listTodo.id" v-slot:default="{ isHovering, props }"
        close-delay="150">
        <div v-if="listTodo.statusTodo" class="section-todos-list__item"
          :class="{ 'section-todos-list__item-hover': isHovering }" v-bind="props">
          <span>{{ listTodo.title }}</span>
          <div :class="{ 'show-btns': isHovering }" class="section-todos-list__item-buttons">
            <v-btn @click="showEditDialog(listTodo)" density="compact" variant="text" icon="mdi-pencil"></v-btn>
            <v-btn @click="deleteTodo(listTodo)" density="compact" variant="text" icon="mdi-delete"></v-btn>
            <v-btn @click="openDialog(listTodo)" density="compact" variant="text" icon="mdi-list-status"></v-btn>
          </div>
        </div>
      </v-hover>
      <div class="section-todos-list__item add-todo" v-if="showCard">
        <textarea v-model="newTodo"></textarea>
        <span class="error-input">{{ errorNewTodo }}</span>
      </div>
    </div>
    <div v-if="showCard" class="section-todos-list__items-footer">
      <div class="section-todos-list__items-footer-btn">
        <v-btn @click="addTodo" variant="elevated" color="primary">
          Add Card
        </v-btn>
        <v-btn @click="closeCard" variant="text" density="compact" icon="mdi-close"></v-btn>
      </div>
    </div>
    <v-hover v-else v-slot:default="{ isHovering, props }" close-delay="150">
      <div class="section-todos-list__items-footer" v-bind="props">
        <div @click="addCard" class="section-todos-list__items-footer-btn" :class="{ 'active': isHovering }">
          <v-btn variant="text" density="compact" icon="mdi-plus"></v-btn>
          <span>Add a card</span>
        </div>
      </div>
    </v-hover>

        <dialog-edit :model-value="isActiveDialog" :options="statusOptions" @closeModal="closeDialogEdit" :info="todoInfo" title="Edit Todo"
      :initial-value="currentStatus" @change="editTodo" />

    <dialog-main :model-value="isActive" :options="statusOptions" @closeModal="closeCard" title="Change Status"
      :initial-value="currentStatus" @change="handleStatusChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DialogMain from '@/components/Dialog/dialogMain.vue';
import DialogEdit from '@/components/Dialog/dialogEdit.vue';

const isActive = ref(false);
const currentStatus = ref('ToDo');
const statusOptions = [
  { label: 'Doing', value: 'Doing' },
  { label: 'Done', value: 'Done' }
];

function handleStatusChange(newStatus: string) {
  if (!todoID.value) return
  todoID.value.statusDoing = newStatus === 'Doing'
  todoID.value.statusDone = newStatus === 'Done'
  todoID.value.statusTodo = false
  emit('editTodo', todoID.value)
  isActive.value = false
}
function deleteTodo(params:type) {
  emit('deleteTodo',params) 
}
let todoInfo = ref({})
let isActiveDialog = ref(false)
function showEditDialog(params:type) {
  isActiveDialog.value = true
  todoInfo.value = params
}
function editTodo(params:type) {
  emit('editTodo', params)
}
function closeDialogEdit() {
  isActiveDialog.value = false
  todoInfo.value = {}
}
const todoID = ref(null)
function openDialog(todo: type) {
  todoID.value = { ...todo }
  isActive.value = true
}
function closeCard() {
  isActive.value = false;
  showCard.value = false;
  newTodo.value = ''
  errorNewTodo.value = ''
}
// ////////////////////
interface Props {
  listTodos: []
}
const props = defineProps<Props>()
const listTodos = ref([])
const showCard = ref(false)
function addCard() {
  showCard.value = true;
}
const newTodo = ref("")
const errorNewTodo = ref("")

const emit = defineEmits<{
  (e: 'editTodo', value: any): void;
  (e: 'todos', value: string): void;
  (e: 'deleteTodo', value: Object): void;
}>();

function addTodo() {
  if (!newTodo.value) {
    errorNewTodo.value = 'کار مورد نظر را وارد نمایید'
    return
  }
  let newTodos = {
    id: props.listTodos.length + 1,
    title: newTodo.value,
    statusDoing: false,
    statusDone: false,
    statusTodo: true,
  }
  emit('todos', newTodos)
  closeCard()
}
</script>

<style lang="scss"></style>