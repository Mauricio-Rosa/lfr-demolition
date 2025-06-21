// src/App.jsx
import { HashRouter as Router } from "react-router-dom";

// Componentes de layout
import Footer from "./components/Footer";
import MenuSidebar from "@/components/MenuSidebar";
import ScrollToTop from "./components/ScrollToTop";

// Importa o AppRoutes centralizado
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
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
