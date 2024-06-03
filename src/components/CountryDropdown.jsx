import React, { useState } from "react";
import { Form, Dropdown } from "react-bootstrap";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const countries = [
  "United States",
  "Canada",
  "Mexico",
  "United Kingdom",
  "Germany",
];

function CountryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Indonesia");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (eventKey) => {
    setSelectedCountry(eventKey);
    setIsOpen(false);
  };

  return (
    <div className="mt-4">
      <Form.Group controlId="countrySelect">
        <Dropdown show={isOpen} onToggle={toggleDropdown} drop="down">
          <Dropdown.Toggle
            style={{ backgroundColor: "rgba(255, 255, 255, 1)", borderRadius: "0.5rem 0.5rem 0.5rem 0.5rem",
            boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)" }}
            variant="light"
            id="dropdown-basic"
            onClick={toggleDropdown}
            className="custom-dropdown-toggle"
          >
            {selectedCountry}
            <span>
              {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {countries.map((country, index) => (
              <Dropdown.Item
                key={index}
                eventKey={country}
                onSelect={handleSelect}
              >
                {country}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>

      <style>{`
      .custom-dropdown-toggle::after {
        display: none; /* Hide the default black triangle (caret) */
      }
      
      .custom-dropdown-toggle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%; /* Ensure the toggle takes up the full width of its container */
      }
      
      `}</style>
    </div>
  );
}

export default CountryDropdown;
