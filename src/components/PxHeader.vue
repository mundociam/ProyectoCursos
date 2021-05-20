<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-blue-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
         
          <span class="font-semibold text-4xl tracking-tight"></span>
        </div>

        <div class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto px-3">
          
          
           <router-link to="/">
              <button class=" text-white rounded-lg sm:bg-blue-900 hover:bg-blue-700 px-4 mx-2"> Home </button>
           </router-link>



           
           <router-link to="/curses">
              <button class=" text-white rounded-lg sm:bg-blue-900 hover:bg-blue-700 px-4 mx-2"> Courses </button>
           </router-link>
           
           <!-- <router-link to="/cursename">
              <button class="rounded-lg sm:bg-pink-600 hover:bg-blue-700 px-4 mx-2"> Name Course </button>
           </router-link> -->
        </div>

      </nav>
    </nav>
  </header>
</template>

<script>
export default {
    name:'PxHeader',

}
</script>