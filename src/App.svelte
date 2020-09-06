<script>
import About from "./components/About.svelte";
import Input from "./components/Input.svelte";
import Person from "./components/Person.svelte";
import Photos from "./components/Photos.svelte";
import Skills from "./components/Skills.svelte";
import Text from "./components/Text.svelte";

export let name;
export let lastname;

let svelteLogo = "https://svelte.dev/svelte-logo-horizontal.svg";

const data = {
	name: "Carlos Guillermo",
	lastname: "Coello Valenzuela",
	age: 25
}
</script>

<style>
	:global(body) {
		background-color: #f2eee2;
		color: #0084f6;
	}
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}

	:global(:root) {
		--theme-color: purple;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Hello {name} {lastname}!</h1>
	<About />
	<Text anotherText="Hola!" />
	<Text />
	<Person {...data}  />
	<Skills />
	<Input />
	<Photos />
	<img src={svelteLogo} alt="Svelte">
</main>