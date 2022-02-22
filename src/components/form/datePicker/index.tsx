/**
 * create reusable date picker, using REACT DATEPICKER LIBRARY
 */

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datePicker.scss';

interface IDatePickerProps {
   label: string;
   selected: Date;
   dateFormat: string;
   callback: React.Dispatch<React.SetStateAction<Date>>;
}

export const FormDate: React.FC<IDatePickerProps> = (props) => {
   const { label, selected, dateFormat, callback } = props;
   return (
      <div className="form-date-field">
         <label htmlFor={label}>{label}</label>
         <DatePicker
            name={label}
            id={label}
            selected={selected}
            dateFormat={dateFormat}
            onChange={(date: Date | null) => callback(date ?? selected)}
         />
      </div>
   );
};
