import React from 'react'
import { Navbar, Container } from 'react-bootstrap';

const Password = () => {
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
				<div class='my-5'>
					<h3 class='text-primary display-6 fw-bolder'>Password recovery</h3>
				</div>
				<div>
					<form action='#'>
						<div class='mb-4'>
							<input
								type='email'
								class='form-control'
								id='exampleFormControlInput1'
								placeholder='Enter your email address'
								required
							/>
						</div>
						<div class='d-grid col-6 mx-auto'>
							<button
								class='btn btn-outline-primary text-dark rounded-pill'
								type='button'>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Password
