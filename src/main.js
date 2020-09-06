import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		lastname: 'carlos'
	}
});

export default app;