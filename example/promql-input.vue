<template>
  <div style="height: 100%" ref="root"></div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import initEdit from "./usePromql";
const editor = ref(null);
const root = ref(null);
const props = defineProps({
  modelValue: String,
});
onMounted(() => {
  editor.value = initEdit(root.value, props);
});
</script>