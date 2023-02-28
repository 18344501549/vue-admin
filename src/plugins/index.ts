import { App } from 'vue';
import { setupTailwindCss } from './tailwindCss';
export function setupPlugin(app: App) {
    setupTailwindCss();
};