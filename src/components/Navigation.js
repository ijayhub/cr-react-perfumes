import React from 'react'
import { Form, Button,  Nav, NavDropdown, Container, Navbar } from 'react-bootstrap'
import cart from '../img/cart4.svg'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';



const Navigation = () => {
	const [appear, setAppear] = useState(false)
	const handleClose = () => setAppear(false);
    return (
        <div>
            <div className={'navbar-small-bg p-3'}>
				<div className='d-flex justify-content-center navbar-small text-center text-decoration-underline'
					onClick={() => setAppear(true)}>
					Extra 15% off click here
				</div>
			<div>
					{
						appear ? <Modal show={appear} onHide={handleClose} className=''>
                            <Modal.Header closeButton>
                                <Modal.Title className='modalHeading text-primary'>
                                    CR Fragrance
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                                        <Form.Label> Enter your email address below</Form.Label>
                                        <Form.Control type='email' placeholder='Enter email' />
                                        <Form.Text className='text-muted'>
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                                        <Form.Check type='checkbox' label='Check me out' />
                                    </Form.Group>

                                    <Button variant='warning' type='submit'>
                                        Get 15% off
                                    </Button>
                                    <a href='/'>
                                        <p className='mt-3'>
                                            No thanks i will rather pay full price
                                        </p>
                                    </a>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant='primary' onClick={handleClose}>
                                    Close
                                </Button>
                                
                            </Modal.Footer>
                        </Modal>
                    :''
                    }
                </div>
            </div>
            <div>
                <Navbar className='navBg p-4' expand='lg'>
                    <Container fluid>
                        <Navbar.Brand href='#' className='navBrand text-white'>
                            CR fragrance
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='navbarScroll' />
                        <Navbar.Collapse id='navbarScroll'>
                            <Nav
                                className='me-auto my-2 my-lg-0'
                                style={{ maxHeight: '200px' }}
                                navbarScroll>
                                <Nav.Link href='/' className='text-dark'>
                                    Home
                                </Nav.Link>
                                <Nav.Link href='#Shoppers' className='text-dark'>
                                    Sales
                                </Nav.Link>
                                <NavDropdown
                                    title='Link'
                                    id='navbarScrollingDropdown'
                                    className='text-white'>
                                    <NavDropdown.Item href='./SignUp'>
                                        sign up{' '}
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href='./SignIn'>Sign in</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href='#action2' className='text-white'>
                                    <img src={cart} alt='cart' />
                                </Nav.Link>
                            </Nav>
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}
 
export default Navigation

						