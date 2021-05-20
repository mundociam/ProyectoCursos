import vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/Home"
import Curses from "@/views/Curses"
import DetailCurses from "@/views/DetailCurses"
import CurseName from "@/views/CurseName"
import Error from '@/views/Error'


vue.use(Router)

export default new Router({
 mode: "history",

 routes: [
    {
        path: "/",
        name: "Home",
        component: Home
    },  

    {
        path: '*',
        name: 'Error',
        component: Error
    },
    
    {
        path: "/curses",
        name: "Curses",
        component: Curses
    },
    {
        path: "/detailcurses/:id",
        name: "DetailCurses",
        component: DetailCurses
    },
    {
        path: "/cursename/:id",
        name: "CurseName",
        component: CurseName
    },
 ]

});