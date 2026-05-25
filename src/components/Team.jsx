import { Users } from 'lucide-react';
import './Team.css';
import who from '../assets/who.png';
import logo_gc from '../assets/logo_GC.jpeg';

const Team = () => {
  // Placeholders para os membros do grupo
  const teamMembers = [
    { nome: "Afonso Trindade", numero: "A107204" },
    { nome: "Bianca Pereira", numero: "A107193" },
    { nome: "José Ferreira", numero: "A107278" },
    { nome: "Renata Bravo", numero: "A107246" },
    { nome: "Sofia Saraiva", numero: "A107249" },
  ];

  return (
    <section id="team" className="team section-padding">
      <div className="container container-wide">
        <div className="text-center mb-5 animate-fade-up">
          <div className="team-icon-header">
            <Users size={32} />
          </div>
          <h2 className="section-title">Sobre o Projeto</h2>
          <p className="team-subtitle">
            Projeto desenvolvido no âmbito da campanha do Dia Mundial da Segurança do Doente 2026.
          </p>
        </div>

        <div className="team-logos-section animate-fade-up delay-100">
          <div style={{
            backgroundColor: "white",
            border: "2px solid rgba(23, 62, 107, 0.2)",
            padding: "2rem 3rem",
            borderRadius: "var(--border-radius)",
            color: "var(--text-muted)",
            fontWeight: 500,
            minWidth: "250px",
            textAlign: "center",
            transition: "var(--transition)"
          }}>
            <img src={logo_gc} alt="Grupo" style={{ width: "250px", height: "auto" }} />
          </div>
          <div style={{
            backgroundColor: "white",
            border: "2px solid rgba(0, 142, 218, 0.3)",
            padding: "2rem 3rem",
            borderRadius: "var(--border-radius)",
            color: "var(--text-muted)",
            fontWeight: 500,
            minWidth: "250px",
            textAlign: "center",
            transition: "var(--transition)"
          }}>
            <img src={who} alt="OMS" style={{ width: "264px", height: "auto" }} />
          </div>
        </div>

        <div className="team-grid animate-fade-up delay-200" style={{ marginTop: "4rem" }}>
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="avatar-placeholder"></div>
              <h3 className="member-name">{member.nome}</h3>
              <p className="member-number">Nº {member.numero}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
