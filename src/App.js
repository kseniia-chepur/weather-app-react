import "./App.css";
import SearchForm from "./SearchForm";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container app-wrapper">
        <SearchForm defaultCity="London" />
      </div>
      <Footer />
    </div>
  );
}
