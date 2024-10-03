import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaClipboardList,
  FaBox,
  FaTruck,
  FaShoppingCart,
  FaUsers,
  FaBars,
} from "react-icons/fa";
import "./Sidebar.css"; // Your custom styles

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to control sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle open/closed state
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <ul>
        <li>
          <NavLink to="/plans" activeClassName="active">
            <FaClipboardList className="icon" /> <span>Plans</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/items" activeClassName="active">
            <FaBox className="icon" /> <span>Items</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/delivery" activeClassName="active">
            <FaTruck className="icon" /> <span>Delivery</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" activeClassName="active">
            <FaShoppingCart className="icon" /> <span>Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName="active">
            <FaUsers className="icon" /> <span>Users</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
