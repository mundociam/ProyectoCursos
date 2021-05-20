<template>
  <main class=" flex justify-center container mx-auto m-10 bg-green-200">
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-green-300"
     >
      
        <img class="w-full" src="infoUserget[0].attributes.avatar" alt="monedas" />
        <div class="px-6 py-4">
          <div class=" shadow-lg font-bold text-center text-xl mb-2">
            Nombre del Curso
          </div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            aperiam quod similique, excepturi incidunt reiciendis id numquam ut
            est blanditiis recusandae voluptatem possimus cumque saepe dolore
            repellendus corporis consequatur culpa.
          </p>
        </div>
        <div class="px-6 py-4 ">
          <div class="w-full py-4 shadow-lg">
            <span class="block bg-gray-200 m-5 px-3 py-1 text-sm font-semibold"
              >Curso Uno</span
            >
            <span class="block bg-gray-200 m-5  px-3 py-1 text-sm font-semibold"
              >Estado</span
            >
          </div>
          <div>
            <router-link
              to="/"
              class="mt-5 text-xl text-red-600 hover:underline"
              ><button
                class=" bg-indigo-800 text-white text-sm py-1 px-6  m-10 rounded-md ml-20"
              >
                volver
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
//:to"{name:'CurseName', parms:{name: api.atributes.name    }}"

import infoUserUrl from "@/infoUserUrl"


export default {
  name: "DetailCurses",

  data(){
      return{
      infoUserget:{},
      infoUserData: {}
      }
  },
  created() {
        
        infoUserUrl     //haciendo el create para traerme la data de la api
        .getTraerDAtaUser ()
        .then(infoUserget => {
            this.infoUserget = infoUserget.included;
            this.infoUserData = infoUserget.data;
            })
        
        .finally(() => (this.isLoading = false))
    } 

  
}
</script>