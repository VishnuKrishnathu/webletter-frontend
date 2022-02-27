import { authAxios } from '@/constants/axios.config';
import { store } from '@/store/store';
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { userDataState } from '@/store/actions/action';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';

export default function NavBar() {
    const [username, setUsername] = useState<string | null | undefined>(null);
    const drop_menu = useRef<HTMLDivElement>(null);
    const router = useRouter();


    function handleLogout(){
        authAxios.get('/logout-user')
        router.push('/login');
    }

    useEffect(function(){
        let subsriber = store.subscribe(() => {
            setUsername(store.getState().user);
        })

        return () => subsriber()

    }, [])

    useEffect(function(){
        authAxios.get('/get-user').then(({data}) => store.dispatch(userDataState(data.username)))
        .catch(err => handleLogout())
    }, [])

    function handleDropAction(){
        if (!drop_menu.current) return;
        drop_menu.current.style.opacity = drop_menu.current.style.opacity == "1" ? "0" : "1"
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand href="/" style={{ flexGrow : 10}}>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/compose-article">Compose</Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title={username ? username : ""} id="collasible-nav-dropdown">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )

}