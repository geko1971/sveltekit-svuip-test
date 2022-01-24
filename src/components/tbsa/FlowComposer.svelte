<script>
  import { onMount } from 'svelte';
	import * as d3 from 'd3';

	let el;
  export let data;

	onMount(() => {
		d3.select('#flow-composer')
			.selectAll("div")
			.data(data)
			.enter()
			.append("div")
			.style("width", d => d + "px")
			.text(d => d);
	});

</script>

<div id="flow-composer"></div>

<style>
  #flow-composer :global(div) {
    border-radius: 5rem;    
		background-color: var(--primary);
		text-align: right;
		padding: 0 5 0 0;
		margin: 5px;
		color: var(--primary-inverse);
	}
</style>