import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import './ActionLines.css';

const ActionLines = () => {
  const actionLines = [
    "Divulgação de informação sobre os impactos dos conflitos nos sistemas de saúde.",
    "Promoção de campanhas de sensibilização através de meios digitais, panfletos e pósteres.",
    "Incentivo à solidariedade internacional e apoio humanitário.",
    "Defesa da proteção de hospitais, ambulâncias e profissionais de saúde.",
    "Educação da população sobre segurança do doente em contextos de emergência."
  ];

  const keyMessages = [
    "A saúde deve ser protegida, mesmo em tempos de guerra.",
    "Hospitais não são alvos.",
    "Todos os doentes têm direito a cuidados seguros.",
    "Proteger profissionais de saúde é salvar vidas.",
    "A segurança do paciente é um direito universal."
  ];

  return (
    <section id="action-lines" className="action-lines section-padding">
      <div className="container">
        <div className="action-grid">
          
          <div className="action-box animate-fade-up">
            <h2 className="section-title">O Que Precisamos Fazer</h2>
            <p className="action-desc">Nossas principais linhas de ação para combater esta crise:</p>
            <ul className="action-list">
              {actionLines.map((line, index) => (
                <li key={index} className="action-item">
                  <span className="action-icon-wrapper">
                    <ArrowRight size={20} className="action-icon" />
                  </span>
                  <p>{line}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="messages-box animate-fade-up delay-200">
            <div className="messages-header">
              <MessageCircle size={32} className="messages-icon" />
              <h2>Mensagens-Chave</h2>
            </div>
            <div className="messages-list">
              {keyMessages.map((msg, index) => (
                <blockquote key={index} className="message-quote">
                  "{msg}"
                </blockquote>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ActionLines;
