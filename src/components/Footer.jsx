import { ShieldPlus } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <ShieldPlus size={32} className="footer-logo-icon" />
            <div className="footer-brand-text">
              <h3>Dia Mundial da Segurança do Doente</h3>
              <p>17 Setembro 2026</p>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-group">
              <h4>Campanha</h4>
              <ul>
                <li><a href="#context">O Impacto</a></li>
                <li><a href="#objectives">Objetivos</a></li>
                <li><a href="#action-lines">O Que Fazer</a></li>
              </ul>
            </div>
            
            <div className="footer-group">
              <h4>Organização</h4>
              <ul>
                <li><a href="#team">A Equipa</a></li>
                <li><span>OMS 75 Anos - Health For All</span></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Campanha Segurança do Paciente em Situações de Conflito. Todos os direitos reservados4444.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
