/**
 * create reusable date picker
 */

//DATEPICKER USING REACT DATEPICKER LIBRARY => LIGHTER & + PERFORMANT
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datePicker.scss';

interface IDatePickerProps {
   label: string;
   selected: Date;
   callback: React.Dispatch<React.SetStateAction<Date>>;
}

export const FormDate: React.FC<IDatePickerProps> = (props) => {
   const { label, selected, callback } = props;
   return (
      <div className="form-date-field">
         <label htmlFor={label}>{label}</label>
         <DatePicker
            name={label}
            id={label}
            selected={selected}
            onChange={(date: Date | null) => callback(date ?? selected)}
         />
      </div>
   );
};

//DATEPICKER USING REACT DATES LIBRARY => HEAVIER
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import './react_dates_overrides.css';
// import React, { useState } from 'react';
// import moment from 'moment';
// import { SingleDatePicker } from 'react-dates';

// interface IDatePickerProps {
//    name: string;
//    currentDate: moment.Moment;
//    callback: React.Dispatch<React.SetStateAction<moment.Moment>>;
// }

// export const DatePicker: React.FC<IDatePickerProps> = (props) => {
//    const { name, currentDate, callback } = props;

//    const [focused, setFocused] = useState(false);

//    const onFocusChange = (arg: { focused: boolean }) => setFocused(arg.focused);

//    return (
//       <>
//          <p>{name}</p>
//          <SingleDatePicker
//             date={currentDate}
//             onDateChange={(date) => callback(date ?? currentDate)}
//             focused={focused}
//             onFocusChange={onFocusChange}
//             isOutsideRange={(day) => false}
//             id={name}
//          />
//       </>
//    );
// };
