
import FormCard from '../components/FormCard'
import FormCheckList from '../components/FormCheckList';
import FormCheckItem from '../components/FormCheckItem';
import React, { useState, useLayoutEffect } from 'react';
import { Form, Button, Navbar, Nav, Image } from 'react-bootstrap'
import { useHistory } from "react-router-dom";


export default function Main() {
    let history = useHistory();
    const [screen, setScreen] = useState(0)



    return (
        <>

            <Navbar bg="light" expand="lg">
                <Navbar.Text onClick={() => setScreen(0)}><Image  style={{ height: 80 }} />Trello-API</Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => setScreen(0)}>Cards</Nav.Link>
                        <Nav.Link onClick={() => setScreen(1)}>CheckLists</Nav.Link>
                        <Nav.Link onClick={() => setScreen(2)}>CheckItems</Nav.Link>

                    </Nav>
                   
                </Navbar.Collapse>
            </Navbar>

            <div className='container' >
                {screen === 0 &&
                    <FormCard setScreen={setScreen} />
                }
                {screen === 1 &&
                    <FormCheckList setScreen={setScreen} />
                }
                {screen === 2 &&
                    <FormCheckItem setScreen={setScreen} />
                }
               
            </div>

           
        </>
    )
}



