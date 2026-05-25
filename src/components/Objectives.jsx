import { useState } from 'react';
import { ShieldCheck, Users, Package, HeartHandshake, Megaphone } from 'lucide-react';
import './Objectives.css';

const Objectives = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const objectivesData = [
    {
      icon: <ShieldCheck size={36} />,
      title: "Proteger",
      desc: "Proteger doentes, profissionais e instalações de saúde",
      color: "var(--card-orange)"
    },
    {
      icon: <Users size={36} />,
      title: "Garantir Acesso",
      desc: "Garantir acesso a cuidados seguros e de qualidade",
      color: "var(--card-purple)"
    },
    {
      icon: <Package size={36} />,
      title: "Fornecer Recursos",
      desc: "Fornecer recursos essenciais de forma eficiente",
      color: "var(--card-green)"
    },
    {
      icon: <HeartHandshake size={36} />,
      title: "Apoiar & Capacitar",
      desc: "Apoiar e capacitar profissionais de saúde no terreno",
      color: "var(--card-yellow)"
    },
    {
      icon: <Megaphone size={36} />,
      title: "Ouvir & Aprender",
      desc: "Ouvir e aprender para melhorar continuamente",
      color: "var(--card-blue)"
    }
  ];

  return (
    <section id="objectives" className="objectives section-padding">
      <div className="container">
        <div className="text-center mb-5 animate-fade-up">
          <h2 className="section-title">O Que Podemos Fazer?</h2>
          <p className="objectives-subtitle">
            Conheça os cinco pilares de ação essenciais definidos na nossa campanha. Clique nos cartões para saber mais.
          </p>
        </div>
        
        <div className="objectives-grid">
          {objectivesData.map((obj, index) => (
            <div 
              key={index} 
              className={`obj-card animate-fade-up delay-${(index % 3 + 1) * 100} ${flippedCards[index] ? 'flipped' : ''}`}
              style={{ '--card-accent': obj.color }}
              onClick={() => handleCardClick(index)}
            >
              <div className="obj-card-inner">
                <div className="obj-card-front">
                  <div className="obj-icon-wrapper" style={{ backgroundColor: obj.color, color: 'var(--primary)' }}>
                    {obj.icon}
                  </div>
                  <h3 className="obj-title">{obj.title}</h3>
                  <span className="click-hint">Clique para ver</span>
                </div>
                <div className="obj-card-back" style={{ backgroundColor: obj.color }}>
                  <h4 className="obj-back-subtitle">Ação</h4>
                  <p className="obj-desc">{obj.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
