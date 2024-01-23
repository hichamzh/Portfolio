<template>
  <div
    class="bg-white rounded-lg shadow-lg overflow-hidden min-w-72 max-w-lg w-full"
    v-for="projet in projet_data"
    :key="projet.name_projet"
  >
    <img
      :src="`/src/assets/${projet.image_projet}`"
      alt=""
      class="w-full h-64 object-cover"
    />
    <div class="p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">
        {{ projet.name_projet }}
      </h2>
      <p class="text-gray-700 leading-tight mb-4">
        {{ projet.description }}
      </p>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img
            src="/src/assets/pickachu.png"
            alt="Avatar"
            class="w-10 h-10 p-1 rounded-full mr-2 object-cover border-2 border-black"
          />
          <span class="text-gray-800 font-semibold">Hicham Zouit</span>
        </div>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          <a :href="projet.link" target="_blank" class="text-black font-bold"
            >Voir le projet</a
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import projet_data from "@/data/projet_data.js";

export default {
  data() {
    return {
      projet_data: projet_data,
    };
  },
};
</script>

<style lang="scss" scoped></style>
