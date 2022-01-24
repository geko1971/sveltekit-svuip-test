<script>
  import {html, h} from 'gridjs';
  import { itIT } from "gridjs/l10n"; //it-IT localization
  import Grid from 'gridjs-svelte';

  export let columns, data, server;
  export let pagination = {
    enabled: true,
    limit: 2,
    summary: true
  };

  columns.forEach(c => {
    //datatypes
    switch (c.datatype) {
      case 'html':
        let originalformatter = c.formatter;
        c.formatter = (cell) => originalformatter ? html(originalformatter(cell)) : html(cell);
        break;
      default:
        break;
    }
  });

  //row actions
  export let rowActions;
  if (rowActions && rowActions.length > 0) {
    columns.push({
      id: 'gridjs-row-actions',
      formatter: (cell, row) => {
        return h('div', {
          className: 'gridjs-row-actions',
        }, ...rowActions.map(rowAction => {
          return h('button', {
            id: rowAction.id,
            className: 'gridjs-row-action-button',
            onClick: () => rowAction.onClick(cell, row),
          }, rowAction.value);
        }));
      }
    });
  }

</script>

{@debug columns}

<Grid
  {data}
  {server}
  {columns}
  search
  className={{
    paginationButton: 'gridjs-pagination-button secondary outline'
  }}
  pagination={pagination}
  language={itIT}
/>
