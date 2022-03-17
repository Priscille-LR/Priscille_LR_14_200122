import 'react-dates/initialize';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/configureStore';
//import { Error } from './pages/error';
// import Home from './pages/home';
// import EmployeeList from './pages/employeeList';
// import CreateEmployee from './pages/createEmployee';
import { Header } from './components/header';
import { Footer } from './components/footer';
import './index.css';

//const HomePage = React.lazy(() => import('./pages/home'));
const CreateEmployeePage = React.lazy(() => import('./pages/createEmployee'));
const EmployeeListPage = React.lazy(() => import('././pages/employeeList'));
const ErrorPage = React.lazy(() => import('./pages/error'));

ReactDOM.render(
   <Provider store={store}>
      <React.StrictMode>
         <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
               <Header />
               <Routes>
                  <Route
                     path="/"
                     element={<Navigate replace to="/employee-list" />}
                  />
                  <Route
                     path="/create-employee"
                     element={<CreateEmployeePage />}
                  />
                  <Route path="/employee-list" element={<EmployeeListPage />} />
                  <Route path="/*" element={<ErrorPage />} />
               </Routes>
               <Footer />
            </Suspense>
         </BrowserRouter>
      </React.StrictMode>
   </Provider>,
   document.getElementById('root')
);
