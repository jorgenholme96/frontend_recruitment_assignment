import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import UserCard from '../UserCard';
import styles from './UsersList.module.css';

function UsersList() {
    const users = useSelector((state) => state.users.usersList);

    return (
        <div>
            <Typography className={styles.headerText} variant="h2">
                Users
            </Typography>
            {users.length > 0 ? (
                <div>
                    {users.map((user) => (
                        <UserCard key={user.email} user={user} />
                    ))}
                </div>
            ) : (
                <Typography variant="h6">No users added yet.</Typography>
            )}
        </div>
    );
}

export default UsersList;
