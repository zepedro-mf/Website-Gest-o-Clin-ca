import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import { MapPin, X, AlertTriangle, Activity, AlertCircle } from 'lucide-react';
import './ConflictMap.css';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Níveis de gravidade e as suas cores
const severityLevels = {
  critical: { color: "#991b1b", label: "Crítica", icon: <AlertTriangle size={16} /> },
  severe: { color: "#dc2626", label: "Severa", icon: <AlertCircle size={16} /> },
  high: { color: "#ea580c", label: "Elevada", icon: <Activity size={16} /> }
};

const conflicts = [
  {
    id: "gaza",
    name: "Israel e Palestina",
    topoNames: ["Palestine", "Israel"],
    coordinates: [34.4668, 31.5],
    severity: "critical",
    description: "Destruição massiva de infraestruturas hospitalares e escassez aguda de medicamentos. Profissionais trabalham sob condições extremas e os doentes enfrentam riscos diários de infeção."
  },
  {
    id: "sudan",
    name: "Sudão",
    topoNames: ["Sudan"],
    coordinates: [30.2176, 12.8628],
    severity: "critical",
    description: "O colapso do sistema de saúde deixou milhões sem acesso a cuidados essenciais. Surtos de doenças infeciosas proliferam rapidamente devido à falta de saneamento."
  },
  {
    id: "ukraine",
    name: "Ucrânia e Rússia",
    topoNames: ["Ukraine", "Russia"],
    coordinates: [31.1656, 48.3794],
    severity: "severe",
    description: "Desde 2022, foram registados milhares de ataques contra serviços de saúde. Hospitais têm sido danificados, dificultando o tratamento de feridos e de doentes crónicos."
  },
  {
    id: "syria",
    name: "Síria",
    topoNames: ["Syria"],
    coordinates: [38.9968, 34.8021],
    severity: "severe",
    description: "Após anos de conflito prolongado, as unidades de saúde estão devastadas e os poucos médicos restantes trabalham no limite da exaustão para salvar vidas."
  },
  {
    id: "yemen",
    name: "Iémen",
    topoNames: ["Yemen"],
    coordinates: [44.2066, 15.5527],
    severity: "severe",
    description: "Colapso do sistema de saúde após mais de uma década de guerra, levando a surtos de cólera e fome aguda que afetam milhões de civis vulneráveis."
  },
  {
    id: "haiti",
    name: "Haiti",
    topoNames: ["Haiti"],
    coordinates: [-72.2852, 18.9712],
    severity: "severe",
    description: "O controlo de áreas da capital por gangues armados paralisa o fornecimento de materiais médicos e obriga ao encerramento de hospitais cruciais."
  },
  {
    id: "myanmar",
    name: "Myanmar",
    topoNames: ["Myanmar"],
    coordinates: [95.9560, 21.9162],
    severity: "high",
    description: "Profissionais de saúde têm sido alvo de ataques diretos e muitos operam em redes clandestinas para conseguir socorrer os feridos de forma segura."
  },
  {
    id: "drc",
    name: "República Democrática do Congo",
    topoNames: ["Dem. Rep. Congo", "Democratic Republic of the Congo"],
    coordinates: [23.5910, -4.0383],
    severity: "high",
    description: "Conflito armado no leste, somado a epidemias constantes, torna o acesso a cuidados médicos altamente restrito e perigoso devido à violência diária."
  }
];

const ConflictMap = () => {
  const [activeConflict, setActiveConflict] = useState(null);

  // Mapear nome do país TopoJSON para a sua cor de gravidade
  const getCountryColor = (geoName) => {
    for (let conflict of conflicts) {
      if (conflict.topoNames.includes(geoName)) {
        return severityLevels[conflict.severity].color;
      }
    }
    return null;
  };

  return (
    <section id="conflict-map" className="conflict-map section-padding">
      <div className="container">
        <div className="text-center mb-5 animate-fade-up">
          <h2 className="section-title">World Conflict Tracker</h2>
          <p className="map-subtitle">
            Este mapa representa conflitos ativos em diferentes regiões do mundo, onde milhões de pessoas enfrentam desafios no acesso a cuidados de saúde seguros.
          </p>
        </div>

        <div className="map-container animate-fade-up delay-200">
          
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 140,
              center: [15, 25] 
            }}
            width={800}
            height={450}
            style={{ width: "100%", height: "auto" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryColor = getCountryColor(geo.properties.name);
                  const isHighlighted = !!countryColor;
                  
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isHighlighted ? countryColor : "#e2e8f0"}
                      stroke={isHighlighted ? "#ffffff" : "#cbd5e1"}
                      strokeWidth={isHighlighted ? 1 : 0.5}
                      onClick={() => {
                        const conflict = conflicts.find(c => c.topoNames.includes(geo.properties.name));
                        if (conflict) setActiveConflict(conflict);
                      }}
                      style={{
                        default: { outline: "none", cursor: isHighlighted ? "pointer" : "default" },
                        hover: { fill: isHighlighted ? countryColor : "#cbd5e1", opacity: isHighlighted ? 0.8 : 1, outline: "none", cursor: isHighlighted ? "pointer" : "default" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {conflicts.map((conflict) => {
              const isActive = activeConflict?.id === conflict.id;
              return (
                <Marker 
                  key={conflict.id} 
                  coordinates={conflict.coordinates}
                  onClick={() => setActiveConflict(conflict)}
                  className="map-marker"
                >
                  <circle 
                    r={isActive ? 12 : 8} 
                    fill={severityLevels[conflict.severity].color} 
                    stroke="#fff" 
                    strokeWidth={isActive ? 3 : 2} 
                  />
                </Marker>
              )
            })}
          </ComposableMap>

          {/* Legenda do Mapa */}
          <div className="map-legend">
            <h4>Nível de Impacto no Sistema de Saúde:</h4>
            <div className="legend-items">
              <div className="legend-item">
                <span className="legend-color" style={{backgroundColor: severityLevels.critical.color}}></span>
                <span>Crítica</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{backgroundColor: severityLevels.severe.color}}></span>
                <span>Severa</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{backgroundColor: severityLevels.high.color}}></span>
                <span>Elevada</span>
              </div>
            </div>
          </div>

          {/* Cartão de Informação (Modal) */}
          {activeConflict && (
            <div className="conflict-card animate-fade-up">
              <button 
                className="close-card-btn"
                onClick={() => setActiveConflict(null)}
              >
                <X size={20} />
              </button>
              <div className="conflict-card-header">
                <MapPin className="conflict-icon" style={{color: severityLevels[activeConflict.severity].color}} />
                <h3>{activeConflict.name}</h3>
              </div>
              <div 
                className="severity-badge mb-3"
                style={{
                  backgroundColor: `${severityLevels[activeConflict.severity].color}15`,
                  color: severityLevels[activeConflict.severity].color,
                  borderColor: severityLevels[activeConflict.severity].color
                }}
              >
                {severityLevels[activeConflict.severity].icon}
                Situação {severityLevels[activeConflict.severity].label}
              </div>
              <p className="conflict-desc">{activeConflict.description}</p>
            </div>
          )}
        </div>

        <div className="map-outro animate-fade-up delay-300">
          <p>
            Nos últimos anos, temos assistido ao surgimento de novas guerras e à intensificação de conflitos já existentes, acompanhados por um crescente desrespeito pelos direitos humanos e pelas normas internacionais. Promover a segurança do doente significa proteger vidas, garantir assistência e reforçar a esperança.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConflictMap;
