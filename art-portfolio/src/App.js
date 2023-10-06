import React, { useState } from "react";

// Header
import Header from "./components/Header";
// Navigation
import Navigation from "./components/Nav";
// About || Home
import About from "./pages/About";
//
import Portfolio from "./pages/Portfolio";

// Footer
import Footer from "./components/Footer";

// Use conditional rendering

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
}

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="body" style={{backgroundColor: "white"}}>
      <Header />
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;