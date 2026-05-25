import './Context.css';
import Counter from "./Counter.tsx";

const Context = () => {
  return (
    <section id="context" className="context section-padding">
      <div className="container">
        <div className="context-grid">
          <div className="context-content animate-fade-up">
            <h2 className="section-title">O Impacto Oculto da Guerra</h2>
            <div className="context-text">
              <p>
                A segurança do doente é um princípio fundamental dos sistemas de saúde e um direito humano essencial. Contudo, em contextos de conflito armado e crises humanitárias, os serviços de saúde enfrentam enormes desafios, como destruição de hospitais, escassez de profissionais, falta de medicamentos e ataques diretos a infraestruturas de saúde.
              </p>
              <p>
                Segundo a Organização Mundial da Saúde (OMS), os conflitos comprometem gravemente a qualidade e a continuidade dos cuidados de saúde, colocando milhões de pessoas em risco. Nos últimos anos, conflitos demonstraram o impacto devastador da guerra na saúde pública, com milhares de ataques documentados contra hospitais, ambulâncias e profissionais de saúde.
              </p>
              <p>
                Além das consequências físicas imediatas, os conflitos aumentam a propagação de doenças infecciosas, dificultam campanhas de vacinação, agravam problemas de saúde mental e comprometem o acompanhamento de doentes crónicos. Crianças, idosos, grávidas e pessoas em situação de vulnerabilidade são particularmente afetados.
              </p>
            </div>
            
            <div className="context-highlight">
              <p>
                Garantir a segurança do paciente nestes contextos significa proteger vidas, assegurar cuidados de saúde dignos e defender os princípios humanitários internacionais.
              </p>
            </div>
          </div>
          
          <div className="context-stats animate-fade-up delay-200">
            <div className="stat-card">
              <div className="stat-number" style={{display: "flex", flexDirection: "row", gap: "0"}}>
                <Counter end={25} duration={1.4}/>%
              </div>
              <div className="stat-desc">Da população mundial vive em contextos frágeis ou afetados por conflitos.</div>
            </div>
            <div className="stat-card stat-accent">
              <div className="stat-number" style={{display: "flex", flexDirection: "row", gap: "0"}}>
                +<Counter end={2800} duration={1.4}/>
              </div>
              <div className="stat-desc">Ataques contra serviços de saúde registados apenas na Ucrânia desde 2022.</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏥</div>
              <div className="stat-desc">Destruição de infraestruturas compromete gravemente a resposta médica de emergência.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Context;
