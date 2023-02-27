import { App } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import LayoutRoutes from './autoliv';
import routes from './module/routes';


const router = createRouter({
    history: createWebHistory(),
    routes: [...routes, ...LayoutRoutes]
});

export function setupRouter(app: App) {
    app.use(router)
};



export default router;