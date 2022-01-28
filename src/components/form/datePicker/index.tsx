import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/lib/css/react_dates_overrides.css';
import React, { useState } from 'react';
import moment from 'moment';

import { SingleDatePicker } from 'react-dates';

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

// export const DatePicker = ({ name, callback }: Props) => {
//    const [focused, setFocused] = useState(false);

//    const onDateChange = (date: moment.Moment | null) => callback(date);
//    const onFocusChange = (arg: { focused: boolean }) => setFocused(arg.focused);

//    return (
//       <>
//          <p>{name}</p>
//          <SingleDatePicker
//             date={moment()}
//             onDateChange={(date) => onDateChange(date)}
//             focused={focused}
//             onFocusChange={onFocusChange}
//             isOutsideRange={(day) => false}
//             id={name}
//          />
//       </>
//    );
// };

// interface Props {
//    name: string;
//    callback: React.Dispatch<React.SetStateAction<moment.Moment | null>>;
// }
