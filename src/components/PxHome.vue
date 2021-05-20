<template>
  <div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg text-center ">
      <img
        class="w-full"
        :src="infoUserget[0].attributes.avatar"
        alt="avatar"
      />
      <a
        class="text-blue-700 mt-4 hover:underline"
        :href="infoUserData.attributes.email"
        >{{ infoUserData.attributes.email }}</a
      >
      <div class="px-6 py-4">
        <div
          class=" shadow-lg font-bold text-center text-xl mb-2"
          v-for="item in infoUserget"
          :key="item.attributes"
        >
          <h1>{{ item.attributes.firstname }} {{ item.attributes.lastname }}</h1>
        </div>
      </div>
      <div class="px-6 py-4 ">
        <div class=" shadow-lg font-bold text-center text-xl mb-2">
          Cursos del usuario
        </div>
        <div class="inline-block ">
          <a :href="infoUserget[2].attributes.url">
            <img
              class="float-left w-1/4 rounded-full"
              src="@/assets/twitter.png"
              alt="url"
          /></a>

          <a :href="infoUserget[1].attributes.url">
            <img
              class="float-right w-1/4 rounded-full"
              src="@/assets/github.png"
              alt="url"
          /></a>
        </div>
        <div class="w-full py-4 shadow-lg ">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold hover:bg-blue-900"
            ><h1>{{ infoUserget[3].attributes.name }}</h1>
          </span>
          <router-link
            class="hover:underline text-blue-700"
            :to="{ name: 'DetailCurses', params: { id: id } }"
            >detalle</router-link
          >
          <!-- <button class="inline-block bg-indigo-800 text-white text-sm p-1 rounded-md ml-30">detalle</button> -->
        </div>
        <div class="w-full py-4 shadow-lg">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold hover:bg-blue-900 "
            ><h1>{{ infoUserget[4].attributes.name }}</h1>
          </span>

          <router-link
            class="hover:underline  text-blue-700"
            :to="{ name: 'DetailCurses', params: { id: id } }"
            >detalle</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PxHome",

  props: {
    infoUserget: {
      type: Array,
      default: () => [],
    },
    infoUserData: Object,
  },
};
</script>
