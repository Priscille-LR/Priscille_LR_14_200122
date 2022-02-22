import { configureStore } from '@reduxjs/toolkit';
import employeeReducer, { IEmployee } from '../features/addEmployee';

export interface IGlobalState {
   employees: IEmployee[];
}

export const store = configureStore({
   reducer: {
      employees: employeeReducer,
   },
});

store.subscribe(() => {
   console.log(store.getState());
});
