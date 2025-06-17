// src/pages/Automacao/index.jsx
import useHelmetMeta from "@/hooks/useHelmetMeta";
import Article from "@/components/Article";

import "./styles.css";

function About() {
  const helmet = useHelmetMeta({
    title: "Automation | Mauricio F.R.",
    description:
      "Testes em fibras ópticas são essenciais para garantir a qualidade e confiabilidade das conexões ópticas, utilizando ferramentas como microscópios, lasers e power meters.",
  });
  return (
    <>
      {helmet}
      
    </>
  );
}

export default About;
