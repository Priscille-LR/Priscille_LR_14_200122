import React from 'react';

/**
 * create reusable inputs for the form
 */

interface IFormInput {
   label: string;
   type: string;
   callback: (text: string) => void;
}

export const FormInput: React.FC<IFormInput> = (props) => {
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
