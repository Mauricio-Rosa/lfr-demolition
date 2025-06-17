import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

export default function AppRoutes() {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}
