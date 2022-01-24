<script>
  import '../styles/index.scss';

  import _ from 'lodash';
  const { map, assign } = _;

  import Flex from 'svelte-flex';
  import _solutions from './_configurations/solutions.json';

  const solutions = map(_solutions, (v, k) => assign(v, { id: k }));
  
  import DataGrid from '../components/common/DataGrid.svelte';
  const columns = [
    'class',
    {
      name: 'status',
      // width: '80%',
      datatype: 'html',
      formatter: (cell) => cell === 'INSTALLED' ? `<code><b>${cell}</b></code>` : `<code>${cell}</code>`
    },
    'technology',
    'service',
    'cpeType',
    'rgType',
    'problemType',
  ];
  const rowActions = [
    {
      id: 'edit-action',
      value: 'Edit',
      onClick: (cell, row) => alert(`Editing flow for technology "${row.cells[2].data}", service "${row.cells[3].data}"`),
    },
    {
      id: 'delete-action',
      value: 'Delete',
      onClick: (cell, row) => alert(`Deleting flow for technology "${row.cells[2].data}", service "${row.cells[3].data}"`),
    }
  ];
  const solutionName = 'TBS_GRN';
  const server = {
    url: `api/ted/tbs/solution/${solutionName}/pattern`,
    then: data => data.patterns.map(pattern => pattern),
    handle: (res) => {
      if (res.status === 404) return { patterns: []}; // no matching records found
      if (res.ok) return res.json(); // response OK
      throw Error('oh no :('); // error
    },
  }
  
  import FlowComposer from '../components/tbsa/FlowComposer.svelte';
  const flowData = [30, 86, 168, 281, 303, 365];

</script>

<main class="container">
  <h1>Welcome to SVUIP</h1>
  <h2>SVelte User Interface Platform</h2>

  <Flex>
  {#each solutions as solution (solution.id)}
  <article>
  <header><b>{solution.name}</b></header>
  {@html solution.description}
  </article>
  {/each}
  </Flex>
  
  <DataGrid {server} {columns} {rowActions} />

  <FlowComposer data={flowData} />
</main>