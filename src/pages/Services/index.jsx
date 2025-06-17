// src/pages/Automacao/index.jsx
import "./styles.css";
import useHelmetMeta from "@/hooks/useHelmetMeta";
import Article from "@/components/Article";


function Services() {
  const helmet = useHelmetMeta({
    title: "Agile | Mauricio F.R.",
    description:
      "Conheça o aplicativo Manutenção 30, uma solução inovadora para otimizar a gestão de manutenção na Ferroport, desenvolvida por mim. Alem disso, descubra como ele melhora a eficiência operacional e a qualidade no atendimento às demandas de manutenção.",
  });
  return (
    <>
    {helmet}
    
    </>
  );
}

export default Services;
