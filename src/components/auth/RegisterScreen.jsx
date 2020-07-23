import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
	return (
		<>
			<h1 className='auth__title'>Register</h1>
			<form>
				<input
					className='auth__input'
					type="text"
					placeholder='name'
					name='name'
					autoComplete='off'
				/>				
				<input
					className='auth__input'
					type="text"
					placeholder='email'
					name='email'
					autoComplete='off'
				/>
				<input
					className='auth__input'
					type="password"
					placeholder='password'
					name='password'
					autoComplete='off'
				/>				
				<input
					className='auth__input'
					type="password2"
					placeholder='confirm password'
					name='password2'
					autoComplete='off'
				/>
				<button
					className='btn btn-primary btn-block mb-5'
					type='submit'
				>Login</button>
				<Link className='link mt-5' to='/auth/login'>
					Already registered?
				</Link>
			</form>
		</>
	)
}
