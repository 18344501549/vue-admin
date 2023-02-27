import { createApp } from 'vue';
// import './style.css';
import router, { setupRouter } from '@/router/index';
import App from './App.vue';

async function bootstrap() {
    const app = createApp(App);
    setupRouter(app);
    // 处理好路由再挂载页面
    await router.isReady();
    app.mount('#app');
};

bootstrap();