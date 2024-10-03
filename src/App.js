import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Plans from "./pages/Plan";
import Items from "./pages/items";
import Delivery from "./pages/delivery";
import Orders from "./pages/orders";
import Users from "./pages/users";

const App = () => {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          backgroundColor: "#F4F4F4",
          minHeight: "100vh",
        }}
      >
        <Sidebar />
        <div style={{ marginLeft: "100px", flexGrow: 1 }}>
          <Routes>
            <Route path="/plans" element={<Plans />} />
            <Route path="/items" element={<Items />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Plans />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
