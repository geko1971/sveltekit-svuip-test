import postcss from './postcss.config.js';
import preprocessor from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocessor(),
  kit: {
    adapter: adapter(),
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    vite: {
      ssr: {
        noExternal: ['svelte-flex'],
      },
      css: {
        postcss,
      },
      scss: {},
    },
  },
};

export default config;
