<template>
  <v-dialog width="auto" scrollable v-model="internalModelValue">
    <v-card :title="title">
      <v-divider class="mt-3"></v-divider>

      <v-card-text class="px-4" style="height: 120px;">
        <v-radio-group v-model="selected">
          <v-radio
            v-for="option in options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          ></v-radio>
        </v-radio-group>
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
import { ref, defineEmits, defineProps } from 'vue';

const props = defineProps({
isActive: Boolean,
  options: {
    type: Array as () => { label: string; value: string }[],
    default: () => []
  },
  title: {
    type: String,
    default: 'Change Status'
  },
  initialValue: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(['modelValue', 'change','closeModal']);

const internalModelValue = ref(props.isActive);
const selected = ref(props.initialValue);

function closeDialog() {
  emit('closeModal', internalModelValue.value);
}

function confirmStatus() {
  emit('change', selected.value);
  closeDialog();
}
</script>
