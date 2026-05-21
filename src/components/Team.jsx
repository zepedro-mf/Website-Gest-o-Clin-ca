import React from 'react';
import { Users } from 'lucide-react';
import './Team.css';

const Team = () => {
  // Placeholders para os membros do grupo
  const teamMembers = [
    { nome: "[Nome do Elemento 1]", numero: "[Nº Mecanográfico]" },
    { nome: "[Nome do Elemento 2]", numero: "[Nº Mecanográfico]" },
    { nome: "[Nome do Elemento 3]", numero: "[Nº Mecanográfico]" },
    { nome: "[Nome do Elemento 4]", numero: "[Nº Mecanográfico]" }
  ];

  return (
    <section id="team" className="team section-padding">
      <div className="container">
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
          <div className="logo-placeholder">
            <span>[Inserir Logótipo do Grupo]</span>
          </div>
          <div className="logo-placeholder who-logo">
            <span>[Inserir Logótipo da OMS]</span>
          </div>
        </div>

        <div className="team-grid animate-fade-up delay-200">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="avatar-placeholder"></div>
              <h3 className="member-name">{member.nome}</h3>
              <p className="member-number">{member.numero}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
