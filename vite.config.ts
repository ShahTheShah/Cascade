import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { global_scss } from './config.js';

export default defineConfig({
	plugins: [sveltekit()],
	compilerOptions: {
		customElement: true
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: global_scss
			}
		}
	},
	build: {
		minify: true,
		cssMinify: true
	}
});
