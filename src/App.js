import React from "react";
import Hero from "./Page/Hero";
import Snippets from "./Page/Snippets";
import Access from "./Page/Access";
import Supercharge from "./Page/Supercharge";
import Agents from "./Page/Agents";
import Action from "./Page/Action";
import Footer from "./Page/Footer";

function App() {
  return (
    <>
      <main className="main">
        <Hero />
        <Snippets />
        <Access />
        <Supercharge />
        <Agents />
        <Action />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
