import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/rhnet-logo.png';

export const Header: React.FC = () => (
   <div className="header">
      <Link to="/" className="homepage-link">
         <img src={logo} alt="hrnet-logo" className="header_logo" />
      </Link>
      <nav>
         <Link to="/" className="nav_item nav-link">
            Home
         </Link>
         <Link to="/create-employee" className="nav_item nav-link">
            Create Employee
         </Link>
         <Link to="/employee-list" className="nav_item nav-link">
            Employee List
         </Link>
      </nav>
   </div>
);
