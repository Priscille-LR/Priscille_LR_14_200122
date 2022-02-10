import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';
import React, { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

/**
 * create reusable date picker
 */

interface IDatePickerProps {
   name: string;
   currentDate: moment.Moment;
   callback: React.Dispatch<React.SetStateAction<moment.Moment>>;
}

export const DatePicker: React.FC<IDatePickerProps> = (props) => {
   const { name, currentDate, callback } = props;

   const [focused, setFocused] = useState(false);

   const onFocusChange = (arg: { focused: boolean }) => setFocused(arg.focused);

   return (
      <>
         <p>{name}</p>
         <SingleDatePicker
            date={currentDate}
            onDateChange={(date) => callback(date ?? currentDate)}
            focused={focused}
            onFocusChange={onFocusChange}
            isOutsideRange={(day) => false}
            id={name}
         />
      </>
   );
};
