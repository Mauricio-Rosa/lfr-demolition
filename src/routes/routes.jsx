import StartScreen from "@/pages/StartScreen"
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Portifolio from "@/pages/Portifolio";
import Budget from "@/pages/Budget";

// Rotas centralizadas
const ROUTES = {
  STARTSCREEN: {
    path: "/",
    element: <StartScreen />,
    label: "StartScreen",
  },
  HOME: {
    path: "/Home",
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
  BUDGET: {
    path: "/budget",
    element: <Budget />,
    label: "Budget",
  },
  LOGOUT: {
    path: "/logout",
    label: "Sair",
  },
};

// Array com apenas rotas que têm componente React definido (para uso com <Routes>)
export const routes = Object.values(ROUTES).filter((r) => r.element);

export default ROUTES;
