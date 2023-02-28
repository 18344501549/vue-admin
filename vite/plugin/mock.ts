import { viteMockServe } from 'vite-plugin-mock'

export function setupMockPlugin(command: boolean) {
    console.log(!command, 'command');

    return viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command,
    });
};