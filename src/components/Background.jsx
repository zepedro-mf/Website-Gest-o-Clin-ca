import { ShieldAlert } from 'lucide-react';
import './Background.css';

const Background = () => {
  return (
    <section className="background">
      <div className="background-overlay"></div>
      <div className="container background-content animate-fade-up">
        <div className="background-badge">
          <ShieldAlert size={24} className="background-icon" />
          <span>Dia Mundial da Segurança do Doente 2026</span>
        </div>
        <h1 className="background-title">
          Segurança do Paciente<br/>
          <span className="text-accent">em Situações de Conflito</span>
        </h1>
        <div className="background-slogan animate-fade-up delay-100">
          <span>Cuidar.</span> <span>Proteger.</span> <span>Salvar Vidas.</span>
        </div>
        <p className="background-subtitle">
          Mesmo em situações de conflito, a segurança do paciente não pode ser deixada para trás.
          Guerras e crises humanitárias colocam doentes, profissionais de saúde e sistemas de saúde em risco.
        </p>
        <div className="background-actions">
          <a href="#context" className="btn btn-primary">Saber Mais</a>
          <a href="#action-lines" className="btn btn-outline background-btn-outline">Como Ajudar</a>
        </div>
      </div>
    </section>
  );
};

export default Background;
