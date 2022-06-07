import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

const Auth = ({ authRoute }) => {
  // let body;
  // body = (
  //   <>
  //     {authRoute === "login" && <LoginForm />}
  //     {authRoute === "register" && <RegisterForm />}
  //   </>
  // );
  // return (
  //   <div>
  //     <h1>LearnIt</h1>
  //     <h4>Keep track of what you are learning</h4>
  //   </div>
    // <div className="landing">
    //   <div className="dark-overlay">
    //     <div className="landing-inner">

    //     </div>
    //   </div>
    // </div>
    let body

	if (authLoading)
		body = (
			<div className='d-flex justify-content-center mt-2'>
				<Spinner animation='border' variant='info' />
			</div>
		)
	else if (isAuthenticated) return <Redirect to='/dashboard' />
	else
		body = (
			<>
				{authRoute === 'login' && <LoginForm />}
				{authRoute === 'register' && <RegisterForm />}
			</>
		)

	return (
		<div className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<h1>LearnIt</h1>
					<h4>Keep track of what you are learning</h4>
					{body}
				</div>
			</div>
		</div>
	)
}
};

export default Auth;
