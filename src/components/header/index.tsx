import { Link } from 'react-router-dom';
import logo from '../../assets/rhnet-logo.svg';
import './header.scss';

export const Header: React.FC = () => (
   <div className="header">
      <Link to="/" className="homepage-link">
         <img src={logo} alt="hrnet-logo" className="header_logo" />
      </Link>
      <nav>
         {/* <Link to="/" className="nav_item nav-link">
            Home
         </Link> */}
         <Link to="/employee-list" className="nav_item nav-link">
            Employee List
         </Link>
         <Link to="/create-employee" className="nav_item nav-link">
            Create Employee
         </Link>
      </nav>
   </div>
);
