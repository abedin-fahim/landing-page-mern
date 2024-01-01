import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <header className={classes.container}>
        <div>
          <div className='logo-brand'>
            <a href='/'>ReCore Thumb</a>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/services'
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/login'
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/signup'
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Signup
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
