import { createApp } from 'vue';
// import './style.css';
import router, { setupRouter } from '@/router/index';
import App from './App.vue';
import { setupPlugin } from './plugins';

async function bootstrap() {
    const app = createApp(App);
    // 注册路由
    setupRouter(app);
    // 注册插件
    setupPlugin(app);
    // 处理好路由再挂载页面
    await router.isReady();
    app.mount('#app');
};

bootstrap();