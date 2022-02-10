import { Column } from 'react-table';
import { format } from 'date-fns';
import moment, { Moment } from 'moment';

/**
 * employees table columns
 */

export type cols = {
   firstName: string;
   lastName: string;
   dateOfBirth: string;
   startDate: string;
   department: string;
   street: string;
   city: string;
   state: string;
   zipCode: number;
};

export const COLUMNS: Column<cols>[] = [
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
