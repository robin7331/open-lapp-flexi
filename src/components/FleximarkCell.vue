<template>
  <div
    :style="{ width: computedWidth, height: computedHeight }"
    class="flex flex-grow bg-lapp-yellow print-no-bg"
    @click="state.editing = true"
  >
    <div class="flex flex-col justify-around ml-[4.2mm] my-[2.1mm]">
      <div class="bg-white rounded-full" style="height: 1mm; width: 5.7mm" />
      <div class="bg-white rounded-full" style="height: 1mm; width: 5.7mm" />
    </div>

    <div
      class="flex flex-1 items-center justify-center h-full mx-1 text-center"
    >
      <div v-if="!state.editing" class="flex flex-col leading-none font-bold space-y-px mb-[0.5mm]">
        <span class="text-xs whitespace-pre-wrap">{{ firstLine }}</span>
        <span class="text-2xs whitespace-pre-wrap">{{ secondLine }}</span>
      </div>
      <textarea
        v-else
        v-model="text"
        class="
          resize-none
          text-2xs
          font-bold
          leading-3
          bg-transparent
          box-border
          text-center
          w-full
          overflow-hidden
          outline-0
        "
        :rows="2"
        @blur="state.editing = false"
      ></textarea>
    </div>

    <div class="flex flex-col justify-around mr-[4.2mm] my-[2.1mm]">
      <div class="bg-white rounded-full" style="height: 1mm; width: 5.7mm" />
      <div class="bg-white rounded-full" style="height: 1mm; width: 5.7mm" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  width: {
    type: Number,
    default: null,
  },
  height: {
    type: Number,
    default: null,
  },
});

const emit = defineEmits(['update:modelValue']);

const text = computed({
  get () {
    return props.modelValue
  },
  set(val) {
    console.log("Test 123")
    emit('update:modelValue', val);
  }
})

const state = ref({ editing: false });

// a computed ref
const computedWidth = computed(() => {
  return `${props.width}mm`;
});
const computedHeight = computed(() => {
  return `${props.height}mm`;
});

// make a computed property that returns the first line of state.text
const firstLine = computed(() => {
  return text.value?.split("\n")[0] ?? "";
});

const secondLine = computed(() => {
  return text.value?.split("\n")[1] ?? "";
});

</script>