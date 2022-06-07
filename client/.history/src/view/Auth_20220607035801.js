import React from 'react';

const Auth = ({authRoute}) => {
    return (
        <div>

{authRoute === 'login' && <loginForm/>}
        </div>
    );
};

export default Auth;