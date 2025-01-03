import Button from "./Button";
import Hero from "./Hero";
import Navigation from "./Navigation";

function App() {
  const name = "Manupa";
  const cartCount = 5;

  return (
    <div>
      <Navigation name={name} cartCount={cartCount} />
      <Hero/>
      <div className="p-4">
      </div>
    </div>
  );
}

export default App;