import { Column } from 'react-table';
import moment from 'moment';
import { IEmployee } from '../../redux/features/addEmployee';

/**
 * employees table columns
 */

export const COLUMNS: Column<IEmployee>[] = [
   {
      Header: 'Firstname',
      accessor: 'firstName',
   },
   {
      Header: 'Lastname',
      accessor: 'lastName',
   },
   {
      Header: 'Date of Birth',
      accessor: 'dateOfBirth',
      Cell: ({ value }) => {
         return moment(value, 'YYYY-MM-DDTHH:mm:ssZ').format('DD/MM/YYYY'); //format date
      },
   },
   {
      Header: 'Start Date',
      accessor: 'startDate',
      Cell: ({ value }) => {
         return moment(value, 'YYYY-MM-DDTHH:mm:ssZ').format('DD/MM/YYYY');
      },
   },
   {
      Header: 'Department',
      accessor: 'department',
   },
   {
      Header: 'Street',
      accessor: 'street',
   },
   {
      Header: 'City',
      accessor: 'city',
   },
   {
      Header: 'Zip code',
      accessor: 'zipCode',
   },
   {
      Header: 'State',
      accessor: 'state',
   },
];
