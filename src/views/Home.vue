<template>
<main class="container mx-auto m-10 bg-green-200">
   <div class="flex justify-center">
       <bounce-loader :loading="isLoading" :color="'#F87171'" :size="100" />
      
      <px-home v-if="!isLoading" :infoUserget="infoUserget" :infoUserData="infoUserData"/> 
    </div>
    </main>
</template>
       
<script>
//import PxTable from "@/components/PxTable";         // hacemos un v-bind="infoUserget"
//import api from '@/api'
import PxHome from "@/components/PxHome";

import infoUserUrl from "@/infoUserUrl"

export default {
    name: "Home",
    components: {
        PxHome
    },

    data() {
        return {
        infoUserget:[],
        infoUserData: null,
       // assets: [],
        isLoading:true,
         //traigo informacion de la api de info usuario        
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