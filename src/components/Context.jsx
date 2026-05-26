import { Building2, Pill, ShieldAlert, Activity, Users, Hospital } from 'lucide-react';
import './Context.css';
import Counter from "./Counter.tsx";

const Context = () => {
  return (
    <section id="context" className="context section-padding" style={{marginTop: "30px"}}>
      <div className="container">
        <div className="context-grid">
          <div className="context-content animate-fade-up">
            <h2 className="section-title">Porque é Importante?</h2>
            <div className="context-text">
              <p className="lead-text">
                Conflitos armados e crises humanitárias colocam em risco doentes, profissionais de saúde e sistemas de saúde.
              </p>
              <p className="lead-text">
                Garantir a segurança do paciente é proteger vidas e dignidade, mesmo nas circunstâncias mais difíceis.
              </p>
            </div>
            
            <div className="risks-container">
              <h3 className="risks-title">Os Principais Riscos</h3>
              <ul className="risks-list">
                <li className="risk-item">
                  <span className="risk-icon-wrapper"><Building2 size={22} /></span>
                  <span>Infraestruturas de saúde danificadas</span>
                </li>
                <li className="risk-item">
                  <span className="risk-icon-wrapper"><Pill size={22} /></span>
                  <span>Falta de medicamentos e recursos</span>
                </li>
                <li className="risk-item">
                  <span className="risk-icon-wrapper"><ShieldAlert size={22} /></span>
                  <span>Maior risco de infeções</span>
                </li>
                <li className="risk-item">
                  <span className="risk-icon-wrapper"><Activity size={22} /></span>
                  <span>Interrupção de tratamentos essenciais</span>
                </li>
                <li className="risk-item">
                  <span className="risk-icon-wrapper"><Users size={22} /></span>
                  <span>Sobrecarga e stress nos profissionais</span>
                </li>
              </ul>
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
              <div className="stat-icon">
                <Hospital size={44} className="stat-icon-svg" />
              </div>
              <div className="stat-desc">Destruição de infraestruturas compromete gravemente a resposta médica de emergência.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Context;
