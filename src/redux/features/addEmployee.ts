import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

export interface IEmployee {
   firstName: string;
   lastName: string;
   dateOfBirth: string;
   startDate: string;
   street: string;
   city: string;
   zipCode: number | undefined;
   state: string;
   department: string;
}

const initialState: IEmployee[] = [
   {
      firstName: 'Jim',
      lastName: 'Halpert',
      dateOfBirth: JSON.stringify(moment()),
      startDate: JSON.stringify(moment()),
      department: 'Sales',
      street: 'Paper Street',
      city: 'Scranton',
      zipCode: 2845,
      state: 'Pensylvannia',
   },
   {
      firstName: 'Pam',
      lastName: 'Beesly',
      dateOfBirth: JSON.stringify(moment()),
      startDate: JSON.stringify(moment()),
      department: 'Marketing',
      street: 'Paper Street',
      city: 'Scranton',
      zipCode: 2845,
      state: 'Pensylvannia',
   },
];

//   const sessionState: IEmployee[] = JSON.parse(
//    (window.localStorage.getItem('employees')?.length === 0
//       ? null
//       : window.localStorage.getItem('employees')) ??
//       JSON.stringify(initialState)
// );

const sessionState = () => {
   try {
      return JSON.parse(window.localStorage.getItem('employees') ?? '');
   } catch {
      return initialState;
   }
};

const { actions, reducer } = createSlice({
   name: 'employee',
   initialState: sessionState,
   reducers: {
      addEmployee: {
         prepare: (employee: IEmployee) => ({
            payload: employee,
         }),
         reducer: (draft, action: PayloadAction<IEmployee>) => {
            draft.push(action.payload);
            window.localStorage.setItem('employees', JSON.stringify(draft));
            return;
         },
      },
      reset: () => {
         return initialState;
      },
   },
});
export default reducer;

export const { addEmployee, reset } = actions;
