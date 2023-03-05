import { App, defineAsyncComponent } from 'vue';
import { setupTailwindCss } from './tailwindCss';
import _ from 'loadsh';


export function setupPlugin(app: App) {
    autoRegisterComponent(app);
    setupTailwindCss();
};


// 自动注册全局组件
function autoRegisterComponent(app: App) {
    const components = import.meta.glob('../components/from/*.vue');

    Object.keys(components).forEach((item, value) => {
        // 拆分路径
        const name = item.split('/').pop()?.split('.').shift() as string;
        app.component(_.camelCase(name), defineAsyncComponent(components[item] as any));
    });
};

