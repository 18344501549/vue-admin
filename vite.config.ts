// import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { ConfigEnv, loadEnv } from 'vite';
import alias from './vite/alias';
import paseEnv from './vite/utils';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: { "@": path.resolve(__dirname, 'src') }
//   }
// })




export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command = 'build';
  const root = process.cwd();
  const env = loadEnv(mode, root);
  paseEnv(env);

  return {
    plugins: [vue()],
    resolve: {
      alias
    }
  }
}

