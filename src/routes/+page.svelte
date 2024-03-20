<script>
	import ExampleBlock from '$lib/Components.svelte/ExampleBlock.svelte';

	const themes = ['heatmap'];
</script>

<div class="wrapper">
	<div class="light">
		{#each themes as theme}
			<ExampleBlock theme={`${theme}__light`} />
		{/each}
	</div>
	<div class="transition"></div>
	<div class="dark">
		{#each themes as theme}
			<ExampleBlock theme={`${theme}__dark`} />
		{/each}
	</div>
</div>

<style lang="scss">
	$t: 2rem;
	.wrapper {
		display: grid;
		grid-template-columns: 1fr $t 1fr;
		justify-content: center;
		height: 100%;
	}

	.light,
	.dark {
		padding: 1rem;
	}

	.transition {
		background: linear-gradient(to right, #f0f0f0, #000);
		width: $t;
	}

	.light {
		background-color: #f0f0f0;
	}
	.dark {
		background-color: #000;
	}
</style>
