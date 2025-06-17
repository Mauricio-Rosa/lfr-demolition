// src/pages/Automacao/index.jsx
import useHelmetMeta from "@/hooks/useHelmetMeta";
import Article from "@/components/Article";
import "./styles.css";

function Portifolio() {
    const helmet = useHelmetMeta({
    title: "Programming | Mauricio F.R.",
    description:
      "Conheça a trajetória profissional de Maurício Freire Rosa, especialista em automação, engenharia elétrica e desenvolvimento de soluções digitais com Python, javascript, React e Power Platform.",
  });
  return (
    <>
    {helmet}
    
    </>
  );
}

export default Portifolio;
