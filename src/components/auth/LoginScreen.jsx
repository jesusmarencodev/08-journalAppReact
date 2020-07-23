import React from 'react';
import {
  Link
} from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { login, starLoginEmailPassword, startGoogleLogin } from '../../actions/auth';

export const LoginScreen = () => {

	const dispatch = useDispatch();

	const [values, handleInputChange, reset] = useForm({
		email : 'jesus@gmail.com',
		password : '123456'
	});

	const { email, password } = values;


	const handleLogin = (e) => {
		e.preventDefault();
		console.log(email, password)
		dispatch(starLoginEmailPassword(12345, 'Jesus'))
	}

	const handleGoogleLogin = () =>{
		dispatch(startGoogleLogin())
	}
	


	return (
		<>
			<h1 className='auth__title'>Login</h1>
			<form onSubmit={handleLogin}>
				<input
					className='auth__input'
					type="text"
					placeholder='email'
					name='email'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
				<input
					className='auth__input'
					type="password"
					placeholder='password'
					name='password'
					autoComplete='off'
					value={password}
					onChange={handleInputChange}
				/>
				<button
					className='btn btn-primary btn-block '
					type='submit'
				>Login</button>

				<div className='auth_social-networks'>
					<p>Login with social network</p>
					<div 
						className="google-btn"
						onClick={handleGoogleLogin}
					>
						<div className="google-icon-wrapper">
								<img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
						</div>
						<p className="btn-text">
								<b>Sign in with google</b>
						</p>
					</div>
					<Link className='link mt-5' to='/auth/register'>
						Create new Account
					</Link>
				</div>
			</form>
		</>
	)
}
