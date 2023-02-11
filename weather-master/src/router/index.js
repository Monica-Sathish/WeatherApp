import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/weathers",
      name: "WeatherList",
      component: () => import("@/components/WeatherList")
    },
    {
      path: "/weathers/:id",
      name: "WeatherEdit",
      component: () => import("@/components/WeatherEdit")
    },
    {
      path: "/add",
      name: "AddWeather",
      component: () => import("@/components/AddWeather")
    }
  ]
});