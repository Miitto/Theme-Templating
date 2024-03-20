<script>
	import ExampleBlock from '$lib/Components.svelte/ExampleBlock.svelte';
</script>

<div class="wrapper">
	<div class="light">
		<ExampleBlock theme="heatmap__light" />
	</div>
	<div class="transition"></div>
	<div class="dark">
		<ExampleBlock theme="heatmap__dark" />
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
