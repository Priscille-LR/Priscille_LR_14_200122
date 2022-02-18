/**
 * create reusable inputs for the form
 */

import React from 'react';

interface IFormTextInput {
   label: string;
   type: string;
   callback: (text: string) => void;
}

export const FormTextInput: React.FC<IFormTextInput> = (props) => {
   const { label, type, callback } = props;

   return (
      <div className="input-wrapper">
         <label htmlFor={label}>{label}</label>
         <input
            type={type}
            id={label}
            required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
               callback(e.target.value);
            }}
         />
      </div>
   );
};

interface IFormNumberInput {
   label: string;
   callback: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const FormNumberInput: React.FC<IFormNumberInput> = (props) => {
   const { label, callback } = props;

   return (
      <div className="input-wrapper">
         <label htmlFor={label}>{label}</label>
         <input
            type="number"
            id={label}
            required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
               callback(parseInt(e.target.value));
            }}
         />
      </div>
   );
};
