/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar className="top-screen" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Navbar.Brand href="/">
              <img
                alt="Retro video game controller"
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/controller-3-213296.png?f=webp"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              TeamMaster
            </Navbar.Brand>
            <Link passHref href="/">
              <Nav.Link>Teams</Nav.Link>
            </Link>
            <Link passHref href="/team/new">
              <Nav.Link>New Team</Nav.Link>
            </Link>
            <Link passHref href="/viewMembers">
              <Nav.Link>Members</Nav.Link>
            </Link>
            <Link passHref href="/member/new">
              <Nav.Link>New Members</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
