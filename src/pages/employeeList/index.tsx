import { Link } from 'react-router-dom';
import { SortingTable } from '../../components/table';
import './employeeList.scss';

export const EmployeeList = () => (
   <div className="list">
      <SortingTable />
   </div>
);
