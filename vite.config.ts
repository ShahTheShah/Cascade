import { sveltekit } from '@sveltejs/kit/vite';

import { defineConfig } from 'vite';
import { global_styles } from './config.js';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: global_styles
			}
		}
	},
	build: {
		// minify: true,
		// cssMinify: true,
		lib: {
			entry: './dev/main.ts',
			name: 'MyLib'
		}
	}
});
