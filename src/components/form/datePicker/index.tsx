/**
 * create reusable date picker, using REACT DATEPICKER LIBRARY
 */

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
