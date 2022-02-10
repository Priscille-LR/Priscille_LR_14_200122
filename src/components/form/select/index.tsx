/**
 * create reusable selects for the form
 */

interface ISelect {
   label: string;
   options: Array<string>;
   callback: React.Dispatch<React.SetStateAction<string>>;
}

export const Select: React.FC<ISelect> = (props) => {
   const { label, options, callback } = props;

   return (
      <div>
         <select id={label} onChange={(e) => callback(e.target.value)}>
            {options.map((option, index) => {
               return (
                  <option value={option} key={index}>
                     {option}
                  </option>
               );
            })}
         </select>
      </div>
   );
};
