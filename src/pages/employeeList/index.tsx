import { EmployeesTable } from '../../components/table';
import './employeeList.scss';

export const EmployeeList = () => (
   <div className="list">
      <EmployeesTable />
   </div>
);

// import React, { Suspense } from 'react';

// const TableComponent = React.lazy(() =>
//    import('../../components/table').then(({ EmployeesTable }) => ({
//       default: EmployeesTable,
//    }))
// );

// export const EmployeeList = () => (
//    <div className="list">
//       <Suspense fallback={<div>Chargement...</div>}>
//          <TableComponent />
//       </Suspense>
//    </div>
// );
