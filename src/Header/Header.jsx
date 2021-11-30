import React from 'react';
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const nav_items = [
    {
      title: "Home-page",
      link: "/",
    },
    {
      title:"All Contacts",
      link:"/all-contacts"
    },
    {
      title: "Add Contacts",
      link: "/add-contacts:id",
    }
  ]; 
  return (
    <div style={{backgroundColor:"var"}}>
      <Container> 
      <Navbar expand="lg" variant="light" bg="light">
        {nav_items.map((item) => (
          <Link to={item.link}>
            <Navbar.Brand>{item.title}</Navbar.Brand>
          </Link>
        ))}
      </Navbar>
    </Container>
    </div>
    
  );
}; 

export default Header; 