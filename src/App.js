import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Welcome from "./pages/welcome";
import Plans from "./pages/Plan";
import NewPlan from "./pages/NewPlan";
import Items from "./pages/items";
import Delivery from "./pages/delivery";
import Orders from "./pages/orders";
import Users from "./pages/users";
import SelectItemPage from "./pages/SelectItemPage"; 
import Lunchmenu from "./pages/Lunchmenu";
import Dinnermenu from "./pages/Dinnermenu";

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
            <Route path="/" element={<Welcome />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/plans/new" element={<NewPlan />} />
            <Route path="/items" element={<Items />} />
            <Route path="/lunch" element={<Lunchmenu />} />
            <Route path="/dinner" element={<Dinnermenu />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<NewPlan />} />
            <Route path="/select-item-page" element={<SelectItemPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
