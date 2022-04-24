import React from 'react'
import { Navbar, Container } from 'react-bootstrap';

const SignIn = () => {
  return (
		<div>
			<div>
				<Navbar className='navBg' expand='lg'>
					<Container fluid>
						<Navbar.Brand href='/' className='navBrand text-white px-5'>
							CR fragrance
						</Navbar.Brand>
					</Container>
				</Navbar>
			</div>
			<div class='container-lg'>
				<div class='my-3 text-center'>
					<h3 class='text-primary display-6 fw-bolder'>Sign in</h3>
				</div>
				<form action='#'>
					<div class='mb-4'>
						<label for='exampleFormControlInput1' class='form-label'>
							Email address
						</label>
						<input
							type='email'
							class='form-control'
							id='exampleFormControlInput1'
							placeholder='name@example.com'
						/>
					</div>
					<div class='mb-4'>
						<label for='exampleFormControlInput1' class='form-label'>
							Password
						</label>
						<input
							type='password'
							class='form-control'
							id='exampleFormControlInput1'
							placeholder='password'
						/>
					</div>
					<a href='/Password'>
						<div class='col-12 text-muted fs-5 fw-bolder'>
							<p>Forgot Password?</p>
						</div>
					</a>
					<br />
					<div class='d-grid col-6 mx-auto mt-5'>
						<button class='btn btn-primary rounded-pill' type='button'>
							Sign in
						</button>
					</div>
					<div class='col-12 text-center mt-3'>
						<p>OR</p>
					</div>
					<div class='d-grid col-6 mx-auto'>
						<button
							class='btn btn-outline-primary text-dark rounded-pill'
							type='button'>
							Sign in with your google account
						</button>
					</div>
					<div class='col-12 text-center mt-3'>
						<p>
							Need an account?
							<a href='/Signup'>
								<span class='text-black'>sign up</span>
							</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignIn

