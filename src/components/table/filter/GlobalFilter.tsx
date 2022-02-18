/**
 * global filtering functionality
 */

import './globalFilter.scss';

interface IGlobalFilter {
   filter: string;
   setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalFilter: React.FC<IGlobalFilter> = (props) => {
   const { filter, setFilter } = props;

   return (
      <div className="global-search">
         <span className="">
            <label htmlFor="search">Search </label>
            <input
               value={filter || ''}
               name="search"
               id="search"
               onChange={(e) => setFilter(e.target.value)}
            />
         </span>
      </div>
   );
};
