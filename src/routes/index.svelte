<script>
  import '../styles/index.scss';

  import _ from 'lodash';

  import Flex from 'svelte-flex';
  import _solutions from './_configurations/solutions.json';

  const solutions = _.map(_solutions, (v, k) => _.assign(v, { id: k }));
  
  import DataGrid from '../components/common/DataGrid.svelte';
  let gridData; // = _.values(_solutions);
  const columns = [
    'class',
    'status',
    {
      name: 'intermediateXml',
      width: '80%',
      // datatype: 'html',
      // formatter: (cell) => `<pre lang="xml">${cell}</pre>`
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
      onClick: (cell, row) => alert(`Editing "${row.cells[0].data}" version "${row.cells[3].data}"`),
    },
    {
      id: 'delete-action',
      value: 'Delete',
      onClick: (cell, row) => alert(`Deleting "${row.cells[0].data}" version "${row.cells[3].data}"`),
    }
  ];
  const solutionName = 'TBS_SELF';
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
  
  <DataGrid data={gridData} {server} {columns} {rowActions} />

  <FlowComposer data={flowData} />

</main>

<!-- <style src="../styles/index.scss"></style> -->