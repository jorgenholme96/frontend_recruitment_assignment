import { Card, Typography, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUserByEmail } from '../../redux/userSlice';
import styles from './UserCard.module.css';

function UserCard({ user }) {
    const dispatch = useDispatch();
    const { name, email } = user;

    const handleRemoveUser = () => {
        dispatch(removeUserByEmail(email));
    };

    return (
        <Card className={styles.userCard} raised>
            <div>
                <div className={styles.cardRow}>
                    <Typography className={styles.cardRowTitle} variant="h6">
                        Name:{' '}
                    </Typography>{' '}
                    <Typography>{name}</Typography>
                </div>
                <div className={styles.cardRow}>
                    <Typography className={styles.cardRowTitle} variant="h6">
                        Email:{' '}
                    </Typography>{' '}
                    <Typography>{email}</Typography>
                </div>
            </div>
            <Button
                className={styles.button}
                onClick={handleRemoveUser}
                variant="outlined"
                color="error"
            >
                <ClearIcon />
            </Button>
        </Card>
    );
}

export default UserCard;
