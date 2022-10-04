<template>
  <div class="flex stripes">
    <div class="flex mx-auto shadow-lg print-no-shadow">
      <div
        class="flex flex-col bg-lapp-yellow mr-[0.3mm] print-no-bg"
        style="width: 16mm"
      />
      <div class="grid grid-cols-2 gap-[0.26mm]">
        <fleximark-cell
          v-for="index in state.data.length"
          :key="index"
          v-model="state.data[index - 1]"
          :width="48"
          :height="9.8"
        />
      </div>
      <div
        class="flex flex-col bg-lapp-yellow ml-[0.3mm] print-no-bg"
        style="width: 16mm"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import FleximarkCell from "./components/FleximarkCell.vue";

const rows = 22;
const cols = 2;

// make a createState() method that creates a state array containing an onject for every cell
const createData = () => {
  const data = [];
  for (let i = 0; i < rows * cols; i++) {
    data.push("");
  }
  return data;
};

// // Retrieve the data and convert from JSOn string to object/array
let obj = JSON.parse(localStorage.getItem("data"));

const state = ref({ data: obj === null ? createData() : obj });

// watch for changes on state
watch(state.value.data, (newState) => {
  localStorage.setItem("data", JSON.stringify(newState));
});
</script>

<style lang="css" scoped>
.stripes {
  background-image: linear-gradient(
    45deg,
    rgb(245, 245, 245) 25%,
    transparent 25%,
    transparent 50%,
    rgb(245, 245, 245) 50%,
    rgb(245, 245, 245) 75%,
    transparent 75%,
    #fff
  );
  background-size: 25px 25px;
}
@media print {
  .stripes {
    background-image: none;
  }
}
</style>
