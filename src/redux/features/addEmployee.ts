import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGlobalState } from '../store/configureStore';

export type IEmployee = {
   firstName: string;
   lastName: string;
   dateOfBirth: string;
   startDate: string;
   department: string;
   street: string;
   city: string;
   zipCode: number | undefined;
   state: string;
};

export const initialState: IEmployee[] = [
   {
      firstName: 'Jim',
      lastName: 'Halpert',
      dateOfBirth: '1980-08-19',
      startDate: '2003-01-19',
      department: 'Sales',
      street: '451 Paper Street',
      city: 'Scranton',
      zipCode: 2845,
      state: 'Pensylvannia',
   },
   {
      firstName: 'Pam',
      lastName: 'Beesly',
      dateOfBirth: '1982-03-05',
      startDate: '2005-05-13',
      street: '451 Paper Street',
      city: 'Scranton',
      department: 'Marketing',
      zipCode: 2845,
      state: 'Pensylvannia',
   },
   {
      firstName: 'Michael',
      lastName: 'Scott',
      dateOfBirth: '1967-04-06',
      startDate: '1997-01-01',
      department: 'Sales',
      street: '5471 Dunder Mifflin Street',
      city: 'Philadelphia',
      zipCode: 2687,
      state: 'Pensylvannia',
   },
   {
      firstName: 'Toby',
      lastName: 'Flenderson',
      dateOfBirth: '1975-06-19',
      startDate: '1999-01-25',
      department: 'Human Ressources',
      street: '9540 McBored Alley',
      city: 'San Diego',
      zipCode: 3657,
      state: 'California',
   },
   {
      firstName: 'Dwight',
      lastName: 'Schrute',
      dateOfBirth: '1983-11-14',
      startDate: '2002-03-23',
      department: 'Legal',
      street: 'Schrute Farms',
      city: 'Stamford',
      zipCode: 4547,
      state: 'New Jersey',
   },
   {
      firstName: 'Ryan',
      lastName: 'Howard',
      dateOfBirth: '1985-08-12',
      startDate: '2006-12-10',
      department: 'Engineering',
      street: '916 Bellgrove Court',
      city: 'New York',
      zipCode: 4547,
      state: 'New York',
   },
];

const { actions, reducer } = createSlice({
   name: 'employees',
   initialState: initialState,
   reducers: {
      addEmployee: {
         prepare: (employee: IEmployee) => ({
            payload: employee,
         }),
         reducer: (draft, action: PayloadAction<IEmployee>) => {
            draft.push(action.payload);
            return;
         },
      },
   },
});

export const selectEmployees = (state: IGlobalState) => state.employees;

export default reducer;

export const { addEmployee } = actions;
