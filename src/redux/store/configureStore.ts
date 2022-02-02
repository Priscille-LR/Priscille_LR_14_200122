import { configureStore, Slice } from '@reduxjs/toolkit';
import employeeReducer, { IEmployee } from '../features/addEmployee';

export type GlobalState = {
   employee: Slice<Array<IEmployee>>;
};

export const store = configureStore({
   reducer: {
      employee: employeeReducer,
   },
});

store.subscribe(() => {
   console.log(store.getState());
});
