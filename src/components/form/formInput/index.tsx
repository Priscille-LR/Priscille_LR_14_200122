import React from 'react';

interface IFormInput {
   label: string;
   type: string;
   callback: React.Dispatch<React.SetStateAction<string>>;
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
   type: string;
   callback: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const FormNumberInput: React.FC<IFormNumberInput> = (props) => {
   const { label, type, callback } = props;

   return (
      <div className="input-wrapper">
         <label htmlFor={label}>{label}</label>
         <input
            type={type}
            id={label}
            required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
               callback(parseInt(e.target.value));
            }}
         />
      </div>
   );
};

// export const TextInput = ({ label, callback }: Props) => (

//    <div className="input-wrapper">
//       <label htmlFor={label}>{label}</label>
//       <input type="text" id={label} onChange={(e) => callback(e.target.value)} />
//    </div>
// );

// interface Props {
//    label: string;
//    callback: React.Dispatch<React.SetStateAction<string>>;
// }
