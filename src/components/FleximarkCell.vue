<template>
  <div
    :style="{ width: computedWidth, height: computedHeight }"
    class="group flex flex-grow bg-lapp-yellow print-no-bg hover:scale-110 transition-all hover:shadow-lg"
    :class="{ 'scale-105 shadow-lg trasnsition-all': props.editing }"
    @click.capture="$emit('shouldEdit')"
  >
    <div class="flex flex-col justify-around ml-[4.2mm] my-[2.1mm]">
      <div class="bg-white rounded-full" style="height: 1mm; width: 5.7mm" />
      <div class="bg-white rounded-full" style="height: 1mm; width: 5.7mm" />
    </div>

    <div
      class="flex w-full items-center justify-center h-full mx-1 text-center"
    >
      <div
        class="flex flex-col w-full leading-none font-bold space-y-px mb-[0.5mm]"
      >
        <input
          v-if="state.editingTitle || emptyTitle"
          ref="titleInput"
          v-model="data.title"
          class="w-full resize-none overflow-hidden box-border text-xs text-center outline-none rounded-sm"
          :class="{
            'bg-lapp-yellow hover:bg-white cursor-pointer hidden group-hover:flex':
              emptyTitle && !state.editingTitle,
          }"
          @keyup.enter="blur"
          @keyup.esc="blur"
          @keydown.tab.prevent="editSubtitle"
          @click="editTitle"
        />
        <span
          v-else
          class="text-xs hover:underline cursor-pointer resize-none overflow-hidden"
          @click="editTitle"
          >{{ data.title }}</span
        >

        <input
          v-if="state.editingSubtitle || emptySubtitle"
          ref="subtitleInput"
          v-model="data.subtitle"
          class="w-full resize-none overflow-hidden box-border text-2xs text-center outline-none rounded-sm"
          :class="{
            'bg-lapp-yellow hover:bg-white cursor-pointer hidden group-hover:flex':
              emptySubtitle && !state.editingSubtitle,
          }"
          @keyup.enter="blur"
          @keyup.esc="blur"
          @keydown.tab.prevent="editTitle"
          @click="editSubtitle"
        />
        <span
          v-else
          class="text-2xs hover:underline cursor-pointer overflow-hidden pb-px"
          @click="editSubtitle"
          >{{ data.subtitle }}</span
        >
      </div>
    </div>

    <div class="flex flex-col justify-around mr-[4.2mm] my-[2.1mm]">
      <div class="bg-white rounded-full" style="height: 1mm; width: 5.7mm" />
      <div class="bg-white rounded-full" style="height: 1mm; width: 5.7mm" />
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({
      title: "",
      subtitle: "",
    }),
  },
  width: {
    type: Number,
    default: null,
  },
  height: {
    type: Number,
    default: null,
  },
  editing: {
    type: Boolean,
    default: false,
  },
});

const titleInput = ref(null);
const subtitleInput = ref(null);

const emit = defineEmits(["update:modelValue", "shouldEdit", "finishEditing"]);

const state = ref({
  editingTitle: false,
  editingSubtitle: false,
});

const data = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit("update:modelValue", val);
  },
});

// watch editing
watch(
  () => props.editing,
  (editing) => {
    if (!editing) {
      state.value.editingTitle = false;
      state.value.editingSubtitle = false;
    }
  }
);

// a computed ref
const computedWidth = computed(() => {
  return `${props.width}mm`;
});
const computedHeight = computed(() => {
  return `${props.height}mm`;
});

const emptyTitle = computed(() => {
  return props.modelValue?.title === "";
});

const emptySubtitle = computed(() => {
  return props.modelValue?.subtitle === "";
});

async function editTitle() {
  state.value.editingTitle = true;
  state.value.editingSubtitle = false;

  await nextTick();
  titleInput.value.focus();
  titleInput.value.select();
}

async function editSubtitle() {
  state.value.editingTitle = false;
  state.value.editingSubtitle = true;

  await nextTick();
  subtitleInput.value.focus();
  subtitleInput.value.select();
}

async function blur() {
  state.value.editingTitle = false;
  state.value.editingSubtitle = false;
  emit("finishEditing");
}
</script>
