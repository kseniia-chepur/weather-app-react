import "./App.css";
import SearchForm from "./SearchForm";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container wrapper">
        <SearchForm defaultCity="New York" />
      </div>
      <Footer />
    </div>
  );
}
