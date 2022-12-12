import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/:catchAll(.*)",
            component: () => import("@/views/Error.vue"),
        },
        {
            path: "/login",
            name: "login",
            component: () => import("@/views/Login.vue"),
        },
    ],
});

export default router;
