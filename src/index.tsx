import 'react-dates/initialize';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { Error } from './pages/error';
import { Header } from './components/header';
import { Home } from './pages/home';
import { EmployeeList } from './pages/employeeList';
import { CreateEmployee } from './pages/createEmployee';
import { Footer } from './components/footer';
import { store } from './redux/store/configureStore';
import './index.css';

ReactDOM.render(
   <Provider store={store}>
      <React.StrictMode>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/create-employee" element={<CreateEmployee />} />
               <Route path="/employee-list" element={<EmployeeList />} />
               <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </React.StrictMode>
   </Provider>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
