import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import { CheckAll } from 'react-bootstrap-icons';
import { LoginForm, LogoutButton } from './Login';
import { Redirect } from 'react-router';
import { useState } from 'react';


const Navigation = (props) => {
  const { onLogOut, loggedIn, user } = props;

  return (
    <Navbar bg="success" variant="dark" fixed="top">
      <Navbar.Toggle aria-controls="left-sidebar" />
      <Navbar.Brand href="/">
        <CheckAll className="mr-1" size="30" /> ToDo Manager
      </Navbar.Brand>
      <Form inline className="my-2 my-lg-0 mx-auto d-block" action="#" role="search" aria-label="Quick search">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-light">Search</Button>      </Form>
      <Nav className="justify-content-end">
        <Navbar.Text className="mx-2">
          {user && user.name && `Welcome, ${user?.name}!`}
        </Navbar.Text>
        <Form inline className="mx-2">
          {loggedIn ? <LogoutButton logout={onLogOut} /> :
            <><Link to="/login"><Button variant="light">Login</Button></Link></>}
        </Form>
      </Nav>
    </Navbar>
  )
}

export default Navigation;