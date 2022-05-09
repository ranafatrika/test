import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import TafsirView from "../views/TafsirView.vue";
import InfoSuratView from "../views/InfoSuratView.vue";
import AyatAlqurView from "../views/AyatAlqur'anView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/ayat Al-qur'an",
      name: "ayat Al-qur'an",
      component: AyatAlqurView,
    },
    {
      path: "/tafsir",
      name: "tafsir",
      component: TafsirView,
    },
    {
      path: "/infoSurat",
      name: "infoSurat",
      component: InfoSuratView,
    },
  ],
});

export default router;
