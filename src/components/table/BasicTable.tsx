import { useMemo } from 'react';
import { useTable, Column } from 'react-table';
import { mockData } from '../../data/mockData';
import { COLUMNS } from './columns';
import { cols } from './columns';
import './table.scss';

export const BasicTable = () => {
   const columns = useMemo<Column<cols>[]>(() => COLUMNS, []); //ensures data is not recreated on every render
   const data = useMemo<cols[]>(() => mockData, []);

   useTable({
      columns: columns,
      data: mockData,
   });

   const tableInstance = useTable({
      columns,
      data,
   });

   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      tableInstance;

   return (
      <table {...getTableProps()}>
         <thead>
            {headerGroups.map((headerGroup) => (
               <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                     <th {...column.getHeaderProps()}>
                        {column.render('Header')}
                     </th>
                  ))}
               </tr>
            ))}
         </thead>
         <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
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
   );
};
