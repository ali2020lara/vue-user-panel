<template>
  <v-dialog width="auto" scrollable v-model="internalModelValue">
    <v-card :title="title">
      <v-divider class="mt-3"></v-divider>

      <v-card-text class="px-4" style="height: 120px;">
       <!-- <v-textarea :model-value="titleTodo.title" label="Label" variant="solo-filled"></v-textarea> -->
       <v-textarea v-model="titleTodo.title" label="Label" variant="solo-filled"></v-textarea>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn text @click="closeDialog">Close</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="surface-variant" text variant="flat" @click="confirmStatus">
          Change
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps, watch } from 'vue';

const props = defineProps({
isActive: Boolean,
  options: {
    type: Array as () => { label: string; value: string }[],
    default: () => []
  },
  title: {
    type: String,
    required: true
  },
  info: {
    type: Object,
    required: true
  },
  initialValue: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(['modelValue', 'change','closeModal']);

const internalModelValue = ref(props.isActive);
const titleTodo = ref(props.info);
console.log('titleTodo',props);
watch(() => props.info, (newVal) => {
  titleTodo.value = newVal
}, { immediate: true })
function closeDialog() {
  emit('closeModal', internalModelValue.value);
}

function confirmStatus() {
    console.log('titleTodo***',titleTodo.value);
    
  emit('change', titleTodo.value);
  closeDialog();
}
</script>
