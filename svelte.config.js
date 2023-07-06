import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
import path from 'path';
import { global_scss } from './config.js';

/** @type {import('@sveltejs/kit').Config} */

export default {
    preprocess: preprocess({
        scss: {
            prependData: global_scss,
        },
    }),
    compilerOptions: {
		customElement: true
	},
    kit: {
        adapter: adapter(),
        alias: {
            $lib: path.resolve('./src/lib'),
            $assets: path.resolve('./src/assets'),
            $component: path.resolve('./src/components'),
            $module: path.resolve('./src/lib/modules'),
            $section: path.resolve('./src/components/sections'),
            $store: path.resolve('./src/lib/stores'),
            $tag: path.resolve('./src/components/tags'),
        }
    }

};
