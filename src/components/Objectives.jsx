import React from 'react';
import { Eye, ShieldCheck, HeartPulse, Shield, Globe } from 'lucide-react';
import './Objectives.css';

const Objectives = () => {
  const objectivesData = [
    {
      icon: <Eye size={32} />,
      title: "Sensibilizar",
      desc: "Sensibilizar a comunidade para os impactos dos conflitos armados na segurança do doente.",
      color: "var(--card-orange)"
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Promover Respeito",
      desc: "Promover o respeito pelo Direito Internacional Humanitário e pela proteção das estruturas de saúde.",
      color: "var(--card-purple)"
    },
    {
      icon: <HeartPulse size={32} />,
      title: "Alertar",
      desc: "Alertar para a importância do acesso universal a cuidados de saúde seguros e de qualidade.",
      color: "var(--card-green)"
    },
    {
      icon: <Shield size={32} />,
      title: "Incentivar Proteção",
      desc: "Incentivar medidas de proteção para profissionais de saúde e pacientes em zonas de conflito.",
      color: "var(--card-yellow)"
    },
    {
      icon: <Globe size={32} />,
      title: "Divulgar Ação",
      desc: "Divulgar o papel das organizações internacionais na resposta humanitária e defesa da saúde global.",
      color: "var(--card-blue)"
    }
  ];

  return (
    <section id="objectives" className="objectives section-padding">
      <div className="container">
        <div className="text-center mb-5 animate-fade-up">
          <h2 className="section-title">Nossos Objetivos</h2>
          <p className="objectives-subtitle">
            A campanha foca-se em 5 pilares fundamentais para garantir a segurança de todos.
          </p>
        </div>
        
        <div className="objectives-grid">
          {objectivesData.map((obj, index) => (
            <div 
              key={index} 
              className={`obj-card animate-fade-up delay-${(index % 3 + 1) * 100}`}
              style={{'--card-accent': obj.color}}
            >
              <div className="obj-icon-wrapper" style={{ backgroundColor: obj.color }}>
                {obj.icon}
              </div>
              <h3 className="obj-title">{obj.title}</h3>
              <p className="obj-desc">{obj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
