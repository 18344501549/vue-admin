import { viteMockServe } from 'vite-plugin-mock'

export function setupMockPlugin(command: boolean) {

    return viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command,
    });
};