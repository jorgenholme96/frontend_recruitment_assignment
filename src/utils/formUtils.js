export const generateEmailHelperText = (emailIsInvalid, emailIsEmpty, userExistsError) => {
    if (emailIsEmpty) return 'Email is required.';
    else if (emailIsInvalid) return 'Email is invalid.';
    else if (userExistsError) return 'This email is already in use.';
    else return '';
};

export const checkIfUserExists = (users, email) => {
    const userEmails = users.map((user) => user.email);
    return userEmails.includes(email);
};
