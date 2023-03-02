import { ConfigEnv, Plugin } from "vite";
import vue from '@vitejs/plugin-vue';
import { setupMockPlugin } from "./mock";
// 抽离插件处理
export default function setupPlugins(command: boolean, env: ViteEnv) {

    const plugins: Plugin[] = [vue()];

    plugins.push(setupMockPlugin(command));
    return plugins;
};