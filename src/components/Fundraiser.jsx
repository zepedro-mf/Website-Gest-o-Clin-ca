import { HeartHandshake, ExternalLink } from 'lucide-react';
import './Fundraiser.css';

const Fundraiser = () => {
  const causes = [
    {
      name: "Ukraine Defense Support",
      desc: "Grupo de voluntários que entrega ajuda médica crítica, consumíveis de saúde e equipamentos de salvamento diretamente a médicos, equipas de emergência e hospitais na Ucrânia.",
      link: "https://ukrainedefensesupport.org/pt/",
      btnText: "Apoiar Ucrânia"
    },
    {
      name: "Funds for Gaza",
      desc: "Plataforma agregadora com ligações para iniciativas de ajuda humanitária e fundos de assistência médica de emergência dedicados a civis e serviços de saúde em Gaza.",
      link: "https://linktr.ee/fundsforgaza?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
      btnText: "Apoiar Gaza"
    },
    {
      name: "AMI - Emergência Palestina",
      desc: "Missão da Fundação AMI de resposta à emergência humanitária, apoiando cuidados de saúde primários, distribuição de bens alimentares e medicamentos essenciais à população afetada.",
      link: "https://ami.org.pt/missao/emergencia-palestina/",
      btnText: "Apoiar AMI"
    },
    {
      name: "Campanha IDEALS",
      desc: "Iniciativa no JustGiving que financia equipas médicas de cirurgia e materiais cirúrgicos cruciais para tratar doentes e feridos em hospitais sob condições extremas.",
      link: "https://www.justgiving.com/campaign/ideals",
      btnText: "Apoiar IDEALS"
    }
  ];

  return (
    <section className="fundraiser section-padding">
      <div id="fundraiser" style={{ position: 'relative', top: '-150px', visibility: 'hidden' }}></div>
      <div className="container">
        <div className="fundraiser-card animate-fade-up">
          <div className="fundraiser-content">
            <div className="fundraiser-badge">
              <HeartHandshake size={20} className="fundraiser-badge-icon" />
              <span>Apoio Humanitário Médico</span>
            </div>
            
            <h2 className="fundraiser-title">Como Ajudar em Contextos de Conflito</h2>
            
            <p className="fundraiser-description">
              Para fazer uma diferença real no terreno, apoiamos e divulgamos iniciativas humanitárias de confiança que fornecem cuidados de saúde e ajuda médica de emergência direta a quem mais precisa.
            </p>
            
            <div className="fundraiser-grid">
              {causes.map((cause, index) => (
                <div key={index} className="fundraiser-featured-card">
                  <div>
                    <h3 className="featured-name">{cause.name}</h3>
                    <p className="featured-desc">{cause.desc}</p>
                  </div>
                  
                  <div className="fundraiser-actions">
                    <a 
                      href={cause.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary fundraiser-btn"
                    >
                      {cause.btnText} <ExternalLink size={18} style={{ marginLeft: '8px' }} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fundraiser;
