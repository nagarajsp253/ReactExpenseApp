import React, {useContext} from 'react';
import AuthContext from '../../Store/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {

  const ctx=useContext(AuthContext);

  return (
   <>
          <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a>Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a>Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    </>
  );
};

export default Navigation;
