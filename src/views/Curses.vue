<template >
  <main class="container mx-auto m-10 bg-green-200 flex justify-center ">
    <bounce-loader :loading="isLoading" :color="'#F87171'" :size="100" />
    

    <div class="flex justify-center"  v-for="a in courseUse " :key="a.tag_list"  >
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-green-300"> 
        <img class="w-full" :src="a.attributes.cover" alt="monedas" />
        <div class="px-6 py-4">
          <div class=" shadow-lg font-bold text-center text-xl mb-2">
            {{a.attributes.slug}}
          </div>  
          <div class=" shadow-lg font-bold text-center text-xl mb-2">
            {{a.attributes.difficulty}}
          </div>
          <div v-html=" a.attributes.description" class="text-gray-700 text-base">           
          </div>
        </div>
        <div class="italic font-bold text-indigo-900"><h2>{{a.attributes.slug}}</h2></div>
        
        <div>          
          <ol class="list-decimal bg-green-400"  >
            <li>{{a.attributes.tag_list[0]}}</li>
            <li>{{a.attributes.tag_list[1]}}</li>            
            <li>{{a.attributes.tag_list[2]}}</li>            
          </ol>
        </div>
        <div>
          
          <router-link 
          class="mt-5 text-xl text-red-600 hover:underline"                      
          :to="{name:'CurseName',params:{id:a.attributes.slug}}"           
            ><button
              class=" bg-indigo-800 text-white text-sm py-1 px-6  m-10 rounded-md ml-20"
            >detalle
            </button>
            </router-link>

        </div>
      </div>
    </div>
  </main>
</template>

<script>
 //:to"{name:'CurseName', parms:{name: api.atributes.name    }}"

import courseUrl from "@/courseUrl";

export default {
  name: "Curses",

  data() {
    return {
      courseUse: [],    
      isLoading: true,
    };
  },
  created() {
    courseUrl //haciendo el create para traerme la data de la api
      .getCourse()
      .then(courseUse => {
        this.courseUse = courseUse;
      })      
      .finally(() => (this.isLoading = false));
  },
};
</script>
