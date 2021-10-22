import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Navbar collapseOnsrllect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./1-1.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="О нас (об Автосервисе) "
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                <Link to="/who-we-are">Кто мы</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="/our-team">Наша команда</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <Link to="/partners">Наши партнеры</Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                <Link to="/our-projects">Наши работы</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <Link to="/social-links">Мы в соц. сетях</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Услуги" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to="/tech-servise">Тех. обслуживание</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="/repair">Ремонт дходовой и агригатов</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <Link to="/body-repair">Кузовные работы</Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                <Link to="/electric-repair">
                  Автоэлектрик, ремонт электрооборудования
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                <Link to="/tuning">Тюнинг и установка доп. оборудования</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                <Link to="/detailing"> Детейлинг</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Цены</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#link">Контакты </Nav.Link>
            <Nav.Link href="#link">+38 067 785-30-03</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
