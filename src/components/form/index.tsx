import React, { useState } from 'react';
import { DatePicker } from './datePicker';
import { FormInput, FormNumberInput } from './formInput';
import { Select } from './select';
import moment, { Moment } from 'moment';
import './form.scss';
import { departments } from '../../data/departments';
import { states } from '../../data/states';
//import { ModalSuccess } from '../modal';
import { Modal } from '@priscille-lr/react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {
   addEmployee,
   reset,
   IEmployee,
} from '../../redux/features/addEmployee';
import { GlobalState } from '../../redux/store/configureStore';

export const Form = () => {
   const [firstName, setFirstName] = useState<string>('');
   const [lastName, setLastName] = useState<string>('');
   const [dateOfBirth, setDateOfBirth] = useState<Moment>(moment());
   const [startDate, setStartDate] = useState<Moment>(moment());
   const [street, setStreet] = useState<string>('');
   const [city, setCity] = useState<string>('');
   const [zipCode, setZipCode] = useState<number>();
   const [state, setState] = useState<string>('');
   const [department, setDepartment] = useState<string>('');

   const [showModal, setShowModal] = useState(true);

   const employee: IEmployee = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: JSON.stringify(dateOfBirth),
      startDate: JSON.stringify(startDate),
      street: street,
      city: city,
      zipCode: zipCode,
      state: state,
      department: department,
   };

   const dispatch = useDispatch();

   const handleSubmit = (e: React.SyntheticEvent) => {
      e.preventDefault();
      dispatch(addEmployee(employee));

      //setShowModal(true);
      // dispatch(reset());
   };

   return (
      <section className="create-employee-content">
         <h1>Create Employee</h1>
         <form onSubmit={handleSubmit}>
            <FormInput
               label={'First Name'}
               type="text"
               callback={setFirstName}
            />
            <FormInput label={'Last Name'} type="text" callback={setLastName} />

            {/* <FormDateInput label={'Date of Birth'} type="date" callback={setDateOfBirth} /> */}

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
            <FormInput label={'Street'} type="text" callback={setStreet} />
            <FormInput label={'City'} type="text" callback={setCity} />
            <FormNumberInput
               label={'Zip Code'}
               type="number"
               callback={setZipCode}
            />
            <p>State</p>
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
            <div className="modal">
               <p>Im a modal</p>
               {
                  // <Modal
                  //    setShowModal={(toto: boolean) => {}}
                  //    modalTitle={'Success !'}
                  //    modalMessage={'Employee has been saved'}
                  //    buttonContent={'Close'}
                  // />
               }
            </div>
         )}
      </section>
   );
};
