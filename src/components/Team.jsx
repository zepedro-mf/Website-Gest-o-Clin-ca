import { Users } from 'lucide-react';
import './Team.css';
import logoGc from '../assets/logo_GC.jpeg';
import afonsoImg from '../assets/Afonso.png';
import biancaImg from '../assets/Bianca.png';
import joseImg from '../assets/Jose.png';
import renataImg from '../assets/Renata.png';
import sofiaImg from '../assets/Sofia.png';

const Team = () => {
  // Membros do grupo com as respetivas fotos mapeadas
  const teamMembers = [
    { nome: "Afonso Trindade", numero: "A107204", foto: afonsoImg },
    { nome: "Bianca Pereira", numero: "A107193", foto: biancaImg },
    { nome: "José Ferreira", numero: "A107278", foto: joseImg },
    { nome: "Renata Bravo", numero: "A107246", foto: renataImg },
    { nome: "Sofia Saraiva", numero: "A107249", foto: sofiaImg },
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
          <div className="team-logo-card-large" style={{ borderColor: "rgba(23, 62, 107, 0.2)" }}>
            <img src={logoGc} alt="Grupo" />
          </div>
        </div>

        <div className="team-grid animate-fade-up delay-200" style={{ marginTop: "4rem" }}>
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              {member.foto ? (
                <img 
                  src={member.foto} 
                  alt={member.nome} 
                  className="avatar-placeholder" 
                  style={{ objectFit: 'cover' }} 
                />
              ) : (
                <div className="avatar-placeholder"></div>
              )}
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
