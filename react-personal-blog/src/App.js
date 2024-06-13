import "./App.css";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";

function App() {
  return (
    <React.StrictMode>
      <>
        <Navbar
          logo="https://static.vecteezy.com/system/resources/previews/002/638/181/large_2x/j-alphabet-letter-logo-for-business-and-company-with-wings-and-black-and-white-color-corporate-brading-and-lettering-icon-with-simple-design-vector.jpg"
          links={["Home", "About", "Contact"]}
        />
        <Blog />
      </>
    </React.StrictMode>
  );
}

export default App;
