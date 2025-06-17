// src/App.jsx
import { HashRouter as Router } from "react-router-dom";

// Componentes de layout
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SearchInput from "@/components/SearchInput";

// Importa o AppRoutes centralizado
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <SearchInput />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
