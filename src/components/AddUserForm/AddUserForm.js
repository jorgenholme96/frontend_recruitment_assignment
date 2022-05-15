import { TextField, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import styles from './AddUserForm.module.css';
import { useValidation } from '../../hooks/useValidation';

function AddUserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const { emailHelperText, emailHasError, nameHasError, handleAddUser } = useValidation(
        name,
        email,
        setName,
        setEmail
    );

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className={styles.formContainer}>
            <Typography variant="h4">Add users</Typography>
            <TextField
                className={styles.formInput}
                error={nameHasError}
                helperText={nameHasError ? 'Name is required' : ''}
                id="name"
                label="Name"
                variant="outlined"
                value={name}
                onChange={handleNameChange}
            />
            <TextField
                className={styles.formInput}
                error={emailHasError}
                helperText={emailHelperText}
                id="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
            />
            <Button
                className={styles.button}
                variant="outlined"
                onClick={handleAddUser}
                disabled={emailHasError || nameHasError}
            >
                Add User
            </Button>
        </div>
    );
}

export default AddUserForm;
