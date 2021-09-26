import React from 'react'
import { Container, FormControl, Navbar, Nav, Dropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="dark" varient="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shoping Cart Logo</Link>
                </Navbar.Brand>

                <Navbar.Text className="search">
                    <FormControl style={{ width: 500 }} placeholder="Search a product" className="m-auto"></FormControl>
                </Navbar.Text>

                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant="success">
                            <Badge> <FaShoppingCart fontSize="16px" color="white"/> 25</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: "370px" }}>
                            <span style={{padding: "10px"}}>Card is empty</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>

            </Container>
        </Navbar>
    )
}

export default Header
