import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/1-1.png';

export default function NavBar() {
  return (
    <Navbar collapseOnsrllect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/example-autoservise1">
            <img src={logo} alt="logo" width="200" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="О нас " id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">
                <Link to="/what-we-do">Что мы умеем</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="/our-team">Наша команда</Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                <Link to="/partners">Наши партнеры</Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.5">
                <Link to="/our-projects">Наши работы</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                <Link to="/who-we-are">О компании</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                <Link to="/social-links">Мы в соц. сетях</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Услуги" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/4.1">
                <Link to="/tech-servise">Тех. обслуживание</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">
                <Link to="/repair">Ремонт дходовой и агригатов</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">
                <Link to="/body-repair">Кузовные работы</Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/4.4">
                <Link to="/electric-repair">
                  Автоэлектрик, ремонт электрооборудования
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/4.5">
                <Link to="/tuning">Тюнинг и установка доп. оборудования</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/4.6">
                <Link to="/detailing"> Детейлинг</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to="/prices">Цены</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/contacts">Контакты</Link>
            </Nav.Link>
            <Nav.Link href="tel:+380677853003">+38 067 785-30-03</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
