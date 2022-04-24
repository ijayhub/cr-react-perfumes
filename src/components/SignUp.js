import React from 'react'
import { Navbar, Container } from 'react-bootstrap';

const SignUp = () => {
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
				<div className='container'>
					<div class='text-center  mt-5 '>
						<h1 class='text-primary header-logo fw-bolder display-4'>
							Create an account
						</h1>
						<small class='text-muted fs-5'>
							Get started with us. Already have an account?
							<a href='/SignIn'>
								<span class='text-primary fs-5 px-2'>Sign in</span>
							</a>
						</small>
					</div>
					<form class='row g-3 pt-5'>
						<div class='col-md-6'>
							<label for='inputEmail4' class='form-label'>
								Email
							</label>
							<input type='email' class='form-control' id='inputEmail4' />
						</div>
						<div class='col-md-6'>
							<label for='inputPassword4' class='form-label'>
								Password
							</label>
							<input
								type='password'
								class='form-control'
								id='inputPassword4'
								placeholder='Password'
							/>
						</div>
						<div class='col-12'>
							<label for='inputAddress' class='form-label'>
								Address
							</label>
							<input
								type='text'
								class='form-control'
								id='inputAddress'
								placeholder='Address'
							/>
						</div>
						<div class='col-md-6'>
							<label for='inputCity' class='form-label'>
								City
							</label>
							<input type='text' class='form-control' id='inputCity' />
						</div>
						<div class='col-md-6'>
							<label for='state' class='form-label'>
								State
							</label>
							<input type='text' class='form-control' id='inputText4' />
						</div>
						<div class='d-grid col-6 mx-auto mt-5'>
							<button class='btn btn-primary rounded-pill' type='submit'>
								Sign up
							</button>
						</div>
					</form>
				</div>
			</div>
		);
}

export default SignUp
