import React, { useState } from 'react';
import { DatePicker } from './datePicker';
import { FormInput } from './formInput';
import { Select } from './select';
import moment, { Moment } from 'moment';
import './form.scss';
import { departments } from '../../data/departments';
import { states } from '../../data/states';

export const Form = () => {
   const [firstName, setFirstName] = useState<string>('');
   const [lastName, setLastName] = useState<string>('');
   const [dateOfBirth, setDateOfBirth] = useState<Moment>(moment());
   const [startDate, setStartDate] = useState<Moment>(moment());
   const [street, setStreet] = useState<string>('');
   const [city, setCity] = useState<string>('');
   const [zipCode, setZipCode] = useState<string>('');
   const [state, setState] = useState<string>('');
   const [department, setDepartment] = useState<string>('');

   return (
      <section className="create-employee-content">
         <h1>Create Employee</h1>
         <form>
            <FormInput
               label={'First Name'}
               type="text"
               callback={setFirstName}
            />
            <FormInput label={'Last Name'} type="text" callback={setLastName} />
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
            <FormInput label={'Zip Code'} type="number" callback={setZipCode} />
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
      </section>
   );
};
