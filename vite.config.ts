import { defineConfig, loadEnv } from 'vite';
import alias from './vite/alias';
import paseEnv from './vite/utils';
import setupPlugins from './vite/plugin/index';


// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const build = command === "serve" ? true : false;
  const env = paseEnv(loadEnv(mode, process.cwd()));

  return {
    // dev 独有配置
    plugins: setupPlugins(build, env),
    resolve: {
      alias
    }
  };
});


