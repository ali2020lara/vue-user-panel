<template>
        <div class="section-todos-list__items">
        <div class="section-todos-list__items-header">
          <span>Doing</span>
        </div>
        <div class="section-todos-list__items-body">
          <v-hover v-for="listTodo in props.listTodos" :key="listTodo.id" v-slot:default="{ isHovering, props }" close-delay="150">
            <div v-if="listTodo.statusDoing" class="section-todos-list__item" :class="{ 'section-todos-list__item-hover': isHovering }"
              v-bind="props">
              <span>{{listTodo.title}}</span>
              <div :class="{ 'show-btns': isHovering }" class="section-todos-list__item-buttons">
                <v-btn @click="showEditDialog(listTodo)" density="compact" variant="text" icon="mdi-pencil"></v-btn>
                <v-btn @click="deleteTodo(listTodo)" density="compact" variant="text" icon="mdi-delete"></v-btn>
                <v-btn  @click="openDialog(listTodo)" density="compact" variant="text" icon="mdi-list-status"></v-btn>
              </div>
            </div>
          </v-hover>

          <div class="section-todos-list__item  add-todo" v-if="showCardDoing">
            <textarea v-model="newTodoDoing"></textarea>
            <span class="error-input">{{ errorNewTodoDoing }}</span>
          </div>
        </div>
        <div v-if="showCardDoing" class="section-todos-list__items-footer">
          <div class="section-todos-list__items-footer-btn">
            <v-btn @click="addTodoDoing" variant="elevated" color="primary">
              Add Card
            </v-btn>
            <v-btn @click="closeCardDoing" variant="text" density="compact" icon="mdi-close"></v-btn>
          </div>
        </div>
        <v-hover v-else v-slot:default="{ isHovering, props }" close-delay="150">
          <div class="section-todos-list__items-footer" v-bind="props">
            <div @click="addCardDoing" class="section-todos-list__items-footer-btn" :class="{ 'active': isHovering }">
              <v-btn variant="text" density="compact" icon="mdi-plus"></v-btn>
              <span>Add a card</span>
            </div>
          </div>
        </v-hover>
  <dialog-main :model-value="isActive" :options="statusOptions" @closeModal="closeCardDoing" title="Change Status"
      :initial-value="currentStatus" @change="handleStatusChange" />
      </div>

        <dialog-edit :model-value="isActiveDialog" :options="statusOptions" @closeModal="closeDialogEdit" :info="todoInfo" title="Edit Todo"
      :initial-value="currentStatus" @change="editTodo" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DialogMain from '@/components/Dialog/dialogMain.vue';
import DialogEdit from '@/components/Dialog/dialogEdit.vue';

let todoInfo = ref({})
let isActiveDialog = ref(false)
function showEditDialog(params:type) {
  console.log('showEditDialog',params);
  isActiveDialog.value = true
  todoInfo.value = params
}
function editTodo(params:type) {
  console.log('editTodo**',params);
  emit('editTodo', params)
}
function closeDialogEdit() {
  isActiveDialog.value = false
  todoInfo.value = {}
}


//////////////////////////////////
const isActive = ref(false);
const currentStatus = ref('ToDo');
const statusOptions = [
  { label: 'ToDo', value: 'ToDo' },
  { label: 'Done', value: 'Done' }
];

function deleteTodo(params:type) {
  emit('deleteTodo',params) 
}
function handleStatusChange(newStatus: string) {
    if (!todoID.value) return
  todoID.value.statusDoing = false
  todoID.value.statusDone = newStatus === 'Done'
  todoID.value.statusTodo = newStatus === 'ToDo'
  emit('editTodo', todoID.value)
  isActive.value = false
}
// ////////////////////////////////
const todoID = ref(null)
function openDialog(todo: type) {
  todoID.value = { ...todo }
  isActive.value = true
}
function closeCardDoing() {
  isActive.value = false;
  showCardDoing.value = false
  newTodoDoing.value = ''
}
// ////////////////////
interface Props {
  listTodos: []
}
const props = defineProps<Props>()
const showCardDoing = ref(false)
function addCardDoing() {
  showCardDoing.value = true
}
const listTodos = ref([])
const newTodoDoing = ref("")
const errorNewTodoDoing = ref("")
const emit = defineEmits<{
  (e: 'editTodo', value: any): void;
  (e: 'todos', value: string): void;
  (e: 'deleteTodo', value: Object): void;
}>();

function addTodoDoing() {
console.log('jhjjhjj',newTodoDoing);
    if (!newTodoDoing.value) { 
      errorNewTodo.value = 'کار مورد نظر را وارد نمایید'
      return
    }
     let newTodos = {
      id: props.listTodos.length + 1,
      title: newTodoDoing.value,
      statusDoing: true,
      statusDone: false,
      statusTodo: false,
     }
    // listTodos.value.push(newTodos)
  console.log('listTodolistTodo',listTodos);
  emit('todos',newTodos)
  closeCardDoing()
}
</script>

<style>

</style>