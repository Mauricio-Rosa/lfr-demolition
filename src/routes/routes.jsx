import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Portifolio from "@/pages/Portifolio";
import BudgetContact from "@/pages/BudgetContact";

// Rotas centralizadas
const ROUTES = {
  HOME: {
    path: "/",
    element: <Home />,
    label: "Home",
  },
  ABOUT: {
    path: "/About",
    element: <About />,
    label: "About",
  },
  SERVICES: {
    path: "/services",
    element: <Services />,
    label: "Services",
  },
  PORTIFOLIO: {
    path: "/portifolio",
    element: <Portifolio />,
    label: "Portifolio",
  },
  BUDGETCONTACT: {
    path: "/BudgetContact",
    element: <BudgetContact />,
    label: "BudgetContact",
  },
  LOGOUT: {
    path: "/logout",
    label: "Sair",
  },
};

// Array com apenas rotas que têm componente React definido (para uso com <Routes>)
export const routes = Object.values(ROUTES).filter((r) => r.element);

export default ROUTES;
