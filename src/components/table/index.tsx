import { useMemo } from 'react';
import {
   useTable,
   Column,
   useSortBy,
   useGlobalFilter,
   usePagination,
} from 'react-table';
import { mockData } from '../../data/mockData';
import { COLUMNS } from './columns';
import { cols } from './columns';
import { GlobalFilter } from './filter/GlobalFilter';
import './table.scss';

export const SortingTable = () => {
   const columns = useMemo<Column<cols>[]>(() => COLUMNS, []); //ensures data is not recreated on every render
   const data = useMemo<cols[]>(() => mockData, []);

   useTable({
      columns: columns,
      data: mockData,
   });

   const tableInstance = useTable(
      {
         columns,
         data,
      },
      useGlobalFilter,
      useSortBy,
      usePagination
   );

   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      nextPage,
      previousPage,
      canPreviousPage,
      canNextPage,
      pageOptions,
      setPageSize,
      prepareRow,
      state,
      setGlobalFilter,
   } = tableInstance;

   const { globalFilter, pageIndex, pageSize } = state;

   return (
      <>
         <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

         <div className="table-wrapper">
            <table {...getTableProps()}>
               <thead>
                  {headerGroups.map((headerGroup) => (
                     <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                           <th
                              {...column.getHeaderProps(
                                 column.getSortByToggleProps()
                              )}
                           >
                              {column.render('Header')}
                              <span>
                                 {column.isSorted
                                    ? column.isSortedDesc
                                       ? '🔽'
                                       : '🔼 '
                                    : ''}
                              </span>
                           </th>
                        ))}
                     </tr>
                  ))}
               </thead>
               <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                     prepareRow(row);
                     return (
                        <tr {...row.getRowProps()}>
                           {row.cells.map((cell) => {
                              return (
                                 <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                 </td>
                              );
                           })}
                        </tr>
                     );
                  })}
               </tbody>
            </table>
            <div className="pagination">
               <div className="page-nav">
                  <span>
                     Page{' '}
                     <strong>
                        {pageIndex + 1} of {pageOptions.length}
                     </strong>{' '}
                  </span>

                  <button
                     onClick={() => previousPage()}
                     disabled={!canPreviousPage}
                  >
                     Previous
                  </button>
                  <button onClick={() => nextPage()} disabled={!canNextPage}>
                     Next
                  </button>
               </div>

               <div className="select">
                  <select
                     value={pageSize}
                     onChange={(e) => setPageSize(Number(e.target.value))}
                  >
                     {[10, 25, 50, 100].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                           Show {pageSize}
                        </option>
                     ))}
                  </select>
               </div>
            </div>
         </div>
      </>
   );
};
