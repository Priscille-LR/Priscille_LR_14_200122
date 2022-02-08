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
      street: 'Paper Street',
      city: 'Scranton',
      zipCode: 2845,
      state: 'Pensylvannia',
      department: 'Sales',
   },
   {
      firstName: 'Pam',
      lastName: 'Beesly',
      dateOfBirth: JSON.stringify(moment()),
      startDate: JSON.stringify(moment()),
      street: 'Paper Street',
      city: 'Scranton',
      zipCode: 2845,
      state: 'Pensylvannia',
      department: 'Marketing',
   },
];

  const sessionState: IEmployee[] = JSON.parse(
   (window.localStorage.getItem('employees')?.length === 0
      ? null
      : window.localStorage.getItem('employees')) ??
      JSON.stringify(initialState)
);

// const sessionState = () => {
//    try { 
//       JSON.parse(window.localStorage.getItem('employees'))
//    } catch () {
//       JSON.stringify(initialState)
//    }
// }


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
