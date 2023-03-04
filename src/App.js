import "./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Card from "./components/Card";
import Contact from "./components/Contact";
import cat from "./img/cat.jfif";

{
  /* <Navbar />
      <Hero />
      <Card /> */
}

function App() {
  return (
    <div className="App">
      <Contact
        img={cat}
        name="Fluffy"
        phone="(212) 555-1234"
        email="fluff@me.com"
      />
      <Contact
        img={cat}
        name="Puffy"
        phone="(212) 666-1234"
        email="fluff@me.com"
      />
      <Contact
        img={cat}
        name="Luffy"
        phone="(212) 777-1234"
        email="fluff@me.com"
      />
      <Contact
        img={cat}
        name="Guffy"
        phone="(212) 888-1234"
        email="fluff@me.com"
      />
    </div>
  );
}

export default App;
