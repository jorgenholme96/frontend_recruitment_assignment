import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import UsersList from './components/UsersList';
import AddUserForm from './components/AddUserForm';
import styles from './app.module.css';

function UserApp() {
  return (
    <Provider store={store}>
      <div className={styles.bodyStyle}>
        <AddUserForm />
        <UsersList />
      </div>
    </Provider>
  );
}

export default UserApp;
