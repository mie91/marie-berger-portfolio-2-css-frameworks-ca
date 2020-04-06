import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from "../home/Home";
import Packages from "../packages/Packages";
import Contact from "../contact/Contact";

function Layout() {
    return (
        <>
        <Router>
            <Navbar expand="lg">
                <NavLink to="/" exact>
                    <Navbar.Brand><h2>January Island Escapes</h2></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ml-auto">
                        <NavLink to="/" exact className="nav-link">
                            Home |
                        </NavLink>
                        <NavLink to="/packages" className="nav-link">
                            Packages |
                        </NavLink>
                        <NavLink to="/contact" className="nav-link">
                            Contact Us
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/packages" component={Packages} />
                    <Route path="/contact" component={Contact} />
                </Switch>
        </Router>

            <footer>
                <div className="footercontent">
                     <p>Copyright © 2018</p>
                 </div>
            </footer>
      </>
    );
}



export default Layout;