import React from 'react';

const Auth = ({authRoute}) => {
    return (
{authRoute === 'login' && <loginForm}
    );
};

export default Auth;