import preprocess from 'svelte-preprocess';

import adapter from '@sveltejs/adapter-node';
import path from 'path';
import { global_styles } from './config.js';

/** @type {import('@sveltejs/kit').Config} */

export default {
    preprocess: preprocess({
        scss: {
            prependData: global_styles
        },
    }),
    compilerOptions: {
        customElement: true
    },
    kit: {
        adapter: adapter(),
        alias: {
            $section  : path.resolve('./src/lib/components/sections'),
            $tag      : path.resolve('./src/lib/components/tags'),
            $component: path.resolve('./src/lib/components'),

            $store    : path.resolve('./src/lib/stores'),
            $tool     : path.resolve('./src/lib/tools'),
            $style    : path.resolve('./src/lib/styles'),
            $server   : path.resolve('./src/lib/server'),
            $lib      : path.resolve('./src/lib'),
            $src      : path.resolve('./src'),
        }
    }

};
