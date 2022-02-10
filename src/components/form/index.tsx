import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import { Modal } from '@priscille-lr/react-modal';
import { DatePicker } from './datePicker';
import { FormInput, FormNumberInput } from './formInput';
import { Select } from './select';
import { departments } from '../../data/departments';
import { states } from '../../data/states';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, IEmployee } from '../../redux/features/addEmployee';
import './form.scss';

/**
 * form to create new employee
 * modal is displayed when employee has been created successfully
 */

export const Form: React.FC = () => {
   const [firstName, setFirstName] = useState<string>('');
   const [lastName, setLastName] = useState<string>('');
   const [dateOfBirth, setDateOfBirth] = useState<Moment>(moment());
   const [startDate, setStartDate] = useState<Moment>(moment());
   const [street, setStreet] = useState<string>('');
   const [city, setCity] = useState<string>('');
   const [zipCode, setZipCode] = useState<number>();
   const [state, setState] = useState<string>('');
   const [department, setDepartment] = useState<string>('');

   const [showModal, setShowModal] = useState(false);

   const employee: IEmployee = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: JSON.stringify(dateOfBirth),
      startDate: JSON.stringify(startDate),
      department: department,
      street: street,
      city: city,
      zipCode: zipCode,
      state: state,
   };

   const dispatch = useDispatch();

   const handleSubmit = (e: React.SyntheticEvent) => {
      e.preventDefault();
      dispatch(addEmployee(employee));
      setShowModal(true);

      const target = e.target as HTMLFormElement;
      target.reset();
   };

   const formatText = (
      text: string,
      callback: React.Dispatch<React.SetStateAction<string>>
   ) => {
      const lowerCase = text.trim().toLowerCase();
      const formattedText = text.charAt(0).toUpperCase() + lowerCase.slice(1);
      callback(formattedText);
   };

   return (
      <section className="create-employee-content">
         <h1>Create Employee</h1>
         <form onSubmit={handleSubmit}>
            <FormInput
               label={'First Name'}
               type="text"
               callback={(text) => formatText(text, setFirstName)}
            />
            <FormInput
               label={'Last Name'}
               type="text"
               callback={(text) => formatText(text, setLastName)}
            />

            <DatePicker
               name={'Date of Birth'}
               currentDate={dateOfBirth}
               callback={setDateOfBirth}
            />

            <DatePicker
               name={'Start Date'}
               currentDate={startDate}
               callback={setStartDate}
            />

            <h2>Adress</h2>
            <FormInput
               label={'Street'}
               type="text"
               callback={(text) => formatText(text, setStreet)}
            />
            <FormInput
               label={'City'}
               type="text"
               callback={(text) => formatText(text, setCity)}
            />
            <FormNumberInput label={'Zip Code'} callback={setZipCode} />
            <span>State</span>
            <Select label={'State'} options={states} callback={setState} />

            <h2>Department</h2>
            <Select
               label={'Department'}
               options={departments}
               callback={setDepartment}
            />

            <button className="submit-btn">Save</button>
         </form>

         {showModal && (
            <Modal
               setShowModal={setShowModal}
               modalTitle={'Success !'}
               modalMessage={'Employee has been created'}
               buttonContent={'Close'}
            />
         )}
      </section>
   );
};
