import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/Group.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Navbar
        expand="md"
        className="d-flex fixed-top flex-row justify-content-between align-items-center px-4"
        style={{
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: "0px 0px 1rem 1rem",
          boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)",
          height: "4rem",
        }}
      >
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-3">
          <img src={Logo} alt="OpenRecipe" className="logo" />
          <span className="site-title ms-2 fw-bold">OpenRecipe.Com</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleSidebar}>
          <FaBars style={{ color: "rgba(42, 122, 178, 1)" }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex flex-row align-items-center gap-3" style={{ color: "rgba(42, 122, 178, 1)" }}>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/inggredients">Ingredients</Nav.Link>
            <Nav.Link as={Link} to="/tools">Tools</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <Nav className="flex-column p-3">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/ingredients">Ingredients</Nav.Link>
          <Nav.Link as={Link} to="/tools">Tools</Nav.Link>
          <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
        </Nav>
      </div>

      <style>{`
        .logo {
          width: 2rem; /* Default size */
          transition: width 0.3s ease;
        }

        .sidebar-link {
            color: rgba(42, 122, 178, 1);
          }

        .site-title {
          color: rgba(42, 122, 178, 1);
          font-size: 1.8rem; /* Default size */
          transition: font-size 0.3s ease;
        }

        @media (max-width: 425px) {
          .logo {
            width: 1.5rem; /* Smaller size for small screens */
          }

          .site-title {
            font-size: 1.5rem; /* Smaller size for small screens */
          }
        }

        @media (max-width: 576px) {
          .logo {
            width: 1rem; /* Even smaller size for extra small screens */
          }

          .site-title {
            font-size: 1.2rem; /* Even smaller size for extra small screens */
          }
        }

        .sidebar {
          position: fixed;
          top: 0;
          right: 0;
          height: 100%;
          width: 250px;
          background-color: rgba(255, 255, 255, 1);
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.25);
          transform: translateX(100%);
          transition: transform 0.3s ease;
          z-index: 1040;
        }

        .sidebar.open {
          transform: translateX(0);
        }

        .sidebar .nav-link {
          color: rgba(42, 122, 178, 1);
        }
      `}</style>
    </>
  );
}

export default Header;
