import { Column } from 'react-table';

export type cols = {
   firstName: string;
   lastName: string;
   dateOfBirth: string;
   startDate: string;
   street: string;
   city: string;
   state: string;
   zipCode: number;
   department: string;
};

export const COLUMNS: Column<cols>[] = [
   //export const COLUMNS = [
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
   },
   {
      Header: 'Start Date',
      accessor: 'startDate',
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
   {
      Header: 'Department',
      accessor: 'department',
   },
];
