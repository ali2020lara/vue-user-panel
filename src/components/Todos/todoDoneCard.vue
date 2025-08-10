<template>
    <div class="section-todos-list__items">
        <div class="section-todos-list__items-header">
            <span>Done</span>
        </div>
        <div class="section-todos-list__items-body">
            <v-hover v-for="listTodo in props.listTodos" :key="listTodo.id" v-slot:default="{ isHovering, props }"
                close-delay="150">
                <div v-if="listTodo.statusDone" class="section-todos-list__item"
                    :class="{ 'section-todos-list__item-hover': isHovering }" v-bind="props">
                    <span>{{ listTodo.title }}</span>
                    <div :class="{ 'show-btns': isHovering }" class="section-todos-list__item-buttons">
                        <v-btn @click="showEditDialog(listTodo)" density="compact" variant="text"
                            icon="mdi-pencil"></v-btn>
                        <v-btn @click="deleteTodo(listTodo)" density="compact" variant="text" icon="mdi-delete"></v-btn>
                        <v-btn @click="openDialog(listTodo)" density="compact" variant="text"
                            icon="mdi-list-status"></v-btn>
                    </div>
                </div>
            </v-hover>
            <div class="section-todos-list__item add-todo" v-if="showCardDone">
                <textarea v-model="newTodoDone"></textarea>
                <span class="error-input">{{ errorNewTodo }}</span>
            </div>
        </div>
        <div v-if="showCardDone" class="section-todos-list__items-footer">
            <div class="section-todos-list__items-footer-btn">
                <v-btn @click="addTodo" variant="elevated" color="primary">
                    Add Card
                </v-btn>
                <v-btn @click="closeCardDone" variant="text" density="compact" icon="mdi-close"></v-btn>
            </div>
        </div>
        <v-hover v-else v-slot:default="{ isHovering, props }" close-delay="150">
            <div class="section-todos-list__items-footer" v-bind="props">
                <div @click="addCardDone" class="section-todos-list__items-footer-btn"
                    :class="{ 'active': isHovering }">
                    <v-btn variant="text" density="compact" icon="mdi-plus"></v-btn>
                    <span>Add a card</span>
                </div>
            </div>
        </v-hover>
        <dialog-edit :model-value="isActiveDialog" :options="statusOptions" @closeModal="closeDialogEdit"
            :info="todoInfo" title="Edit Todo" :initial-value="currentStatus" @change="editTodo" />
        <dialog-main :model-value="isActive" :options="statusOptions" @closeModal="closeCard" title="Change Status"
            :initial-value="currentStatus" @change="handleStatusChange" />
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import DialogMain from '@/components/Dialog/dialogMain.vue';
import DialogEdit from '@/components/Dialog/dialogEdit.vue';

let todoInfo = ref({})
let isActiveDialog = ref(false)
const isActive = ref(false);
const currentStatus = ref('ToDo');
const statusOptions = [
    { label: 'ToDo', value: 'ToDo' },
    { label: 'Doing', value: 'Doing' },
];
const newTodoDone = ref("")
const errorNewTodo = ref("")
const emit = defineEmits<{
    (e: 'editTodo', value: any): void;
    (e: 'todos', value: string): void;
    (e: 'deleteTodo', value: Object): void;
}>();
interface Props {
    listTodos: []
}
const props = defineProps<Props>()
const showCardDone = ref(false)
function deleteTodo(params:type) {
    console.log('fdfddfdf',params);
    
  emit('deleteTodo',params) 
}
function showEditDialog(params: type) {
    isActiveDialog.value = true
    todoInfo.value = params
}
function editTodo(params: type) {
    emit('editTodo', params)
}
function closeDialogEdit() {
    isActiveDialog.value = false
    todoInfo.value = {}
}
function handleStatusChange(newStatus: string) {
    if (!todoID.value) return
    todoID.value.statusDoing = newStatus === 'Doing'
    todoID.value.statusDone = false
    todoID.value.statusTodo = newStatus === 'ToDo'
    emit('editTodo', todoID.value)
    isActive.value = false
}
const todoID = ref(null)
function openDialog(todo: type) {
    todoID.value = { ...todo }
    isActive.value = true
}
function closeCard() {
    isActive.value = false;
    newTodo.value = ''
    errorNewTodo.value = ''
}
function addCardDone() {
    showCardDone.value = true
}
function closeCardDone() {
    showCardDone.value = false
    errorNewTodo.value = ''
    newTodoDone.value = ''
}

function addTodo() {
    if (!newTodoDone.value) {
        errorNewTodo.value = 'کار مورد نظر را وارد نمایید'
        return
    }
    let newTodos = {
        id: props.listTodos.length + 1,
        title: newTodoDone.value,
        statusDoing: false,
        statusDone: true,
        statusTodo: false,
    }
    emit('todos', newTodos)
    closeCardDone()
}
</script>

<style></style>