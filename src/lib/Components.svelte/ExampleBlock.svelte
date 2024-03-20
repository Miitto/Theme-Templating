<script lang="ts">
	export let theme: string;
</script>

<div class={`${theme}__theme wrapper container`}>
	<header>
		<h1>Example Title</h1>
		<div>
			<button> = </button>
			<button> &larr; </button>
		</div>
	</header>
	<div>
		<h2>Example Block</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia, asperiores
			aspernatur nemo voluptatem aut officia alias. Tenetur ullam modi exercitationem officiis
			cupiditate laboriosam doloribus pariatur sunt explicabo ipsum. Exercitationem!
		</p>
		<div class="buttons">
			<button class="info">Info</button>
			<button class="success">Success</button>
			<button class="warning">Warning</button>
			<button class="danger">Danger</button>
		</div>
		<form class="container">
			<h2>Example Form</h2>
			<input type="text" placeholder="Enter your name" />
			<input type="submit" class="primary" value="Submit" />
			<button class="secondary">Cancel</button>
		</form>
		<div>
			<button class="primary">Primary To Show Border Leakage</button>
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px solid #5555;
		padding: var(--container-border-width);

		> div {
			padding: 1rem;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			align-items: center;

			> div {
				display: flex;
				justify-content: center;
				gap: 1rem;

				&:last-child {
					justify-content: left;
					width: 100%;
				}
			}

			> form {
				width: fit-content;
				background-color: var(--bg-alt);
				border-radius: var(--border-radius-container);
				border: 1px solid rgba(var(--divider, var(--text)), 0.8);
				display: flex;
				gap: 1rem;
				flex-direction: column;
			}
		}
	}

	header {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;

		> div {
			display: flex;
			gap: 1em;
		}

		h1 {
			flex-grow: 1;
		}
	}
</style>
