import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';
import { isEmail } from 'validator';
import { checkIfUserExists, generateEmailHelperText } from '../utils/formUtils';

export const useValidation = (name, email, setName, setEmail) => {
    const [nameIsEmpty, setNameIsEmpty] = useState(false);

    const [emailIsInvalid, setEmailIsInvalid] = useState(false);
    const [emailIsEmpty, setEmailIsEmpty] = useState(false);
    const [userExistsError, setUserExistsError] = useState(false);

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.usersList);

    useEffect(() => {
        if (!isEmail(email) && email.length > 0) {
            setEmailIsInvalid(true);
        } else {
            setEmailIsInvalid(false);
        }

        if (email.length > 0) {
            setEmailIsEmpty(false);
            setUserExistsError(false);
        }
    }, [email]);

    useEffect(() => {
        if (name.length > 0) {
            setNameIsEmpty(false);
        }
    }, [name]);

    const handleAddUser = () => {
        if (name.length === 0 || email.length === 0) {
            name.length === 0 && setNameIsEmpty(true);
            email.length === 0 && setEmailIsEmpty(true);
            return;
        }

        if (checkIfUserExists(users, email)) {
            setUserExistsError(true);
            return;
        } else if (userExistsError) {
            setUserExistsError(false);
        }

        dispatch(
            addUser({
                name,
                email,
            })
        );
        setName('');
        setEmail('');
    };

    return {
        emailHelperText: generateEmailHelperText(emailIsInvalid, emailIsEmpty, userExistsError),
        emailHasError: emailIsEmpty || emailIsInvalid || userExistsError,
        nameHasError: nameIsEmpty,
        handleAddUser,
    };
};
