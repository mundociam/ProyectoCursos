<template>
  <main class="container mx-auto m-10 bg-green-200  ">
    <div class="flex justify-center">
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-green-300">
        <img class="w-full" :src="dWebUse.data.attributes.cover" alt="foto" />
        <div class="px-6 py-4">
          <div class=" shadow-lg font-bold text-center text-xl mb-2">
            {{ dWebUse.data.attributes.name }}
          </div>
          <div class="hover:text-black text-yellow-700 shadow-lg font-bold text-center text-xl mb-2">
            {{ dWebUse.data.attributes.difficulty }}
          </div >
          <div class="text-talian" v-html="dWebUse.data.attributes.description"></div>
        </div>
        <div>
          <div class=" shadow-lg font-bold text-center text-xl mb-2">
            {{dWebUse.data.attributes.slug}}
          </div>
          
          <ol class="list-decimal text-yellow-700 font-medium-extrabold hover:shadow-lg" v-for="(item, index) of dWebUse.included" :key="index">
            <li>{{index}}.-  {{item.attributes.name}}</li>            
          </ol>
        </div>
        <div>
          <button
              class="text-center hover:text-black bg-indigo-800 text-white text-sm py-1 px-6  m-10 rounded-md ml-20"
             @click="volver">
              volver
            </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import dWebUrl from "@/dWebUrl";

export default {
  name: "CurseName",

  data() {
    return {
      dWebUse: {},
      // isLoading: true,
    };
  },
  //ciclo vida
  created() {
    dWebUrl //haciendo el create para traerme la data de la api
      .getdWeb(this.$route.params.id)
      .then((dWebUse) => {
        this.dWebUse = dWebUse;
      });
    //.finally(() => (this.isLoading = false));
  },
   methods:{
      volver(){
          this.$router.push('/curses')
      }

  }
};
</script>
