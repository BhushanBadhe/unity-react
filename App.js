// - Header
// ---> logo
// ----> links
// - Body
// --> Searchbar
// ---> Restaurant Card
// --> Footer

import React from "react";
import ReactDOM from "react-dom/client";

// Header Component

const Header = () => {
  const logo_url =
    "https://cdn2.vectorstock.com/i/1000x1000/73/31/food-app-logo-vector-34017331.jpg";

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo_url} alt="Logo" className="logo" />
      </div>
      <div className="nav-links">
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <ResaturantCard />
      <ResaturantCard />
      <ResaturantCard />
      <ResaturantCard />
      <ResaturantCard />
    </div>
  );
};

const Footer = () => {
  return <div>Copyright @ 2022</div>;
};

const ResaturantCard = () => {

  const rest_image = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cqseda8lt05xiwtnuc5e"

  return <div className="rest-container">
      <div className="rest-card">
        <img  src={rest_image}  className="rest_image"/>
        <h4>Restaurant Name</h4>
        <h4>3 stars</h4>
      </div>
    </div>;
};

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
