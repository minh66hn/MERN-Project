import React from 'react';

const Auth = ({authRoute}) => {
    return (
        learnit
{authRoute === 'login' && <loginForm/>}
    );
};

export default Auth;