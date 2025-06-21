// src/App.jsx
import { HashRouter as Router } from "react-router-dom";

// Componentes de layout
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SearchInput from "@/components/SearchInput";
import MenuSidebar from "@/components/MenuSidebar";
import ScrollToTop from "./components/ScrollToTop";

// Importa o AppRoutes centralizado
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <Header />
      {/* <Navigation /> 
      <SearchInput /> */}
      <MenuSidebar/>
      <ScrollToTop/>
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
