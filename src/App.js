import "./App.css";
import SearchForm from "./SearchForm";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <SearchForm defaultCity="London" />
        <Footer />
      </div>
    </div>
  );
}
