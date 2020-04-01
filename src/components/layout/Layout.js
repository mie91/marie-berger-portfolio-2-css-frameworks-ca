import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import Home from "../home/Home";
import Packages from "../packages/Packages";
import Contact from "../contact/Contact";



function Layout() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <NavLink to="/" exact>
                    <Navbar.Brand>January Island Escapes</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" exact className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/packages" className="nav-link">
                            Packages
                        </NavLink>
                        <NavLink to="/contact" className="nav-link">
                            Contact Us
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/packages" component={Packages} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Container>
        </Router>
    );
}



export default Layout;