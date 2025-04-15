import { useState } from 'react';

// Component to display Ayurvedic properties of different fabrics and dyes
const AyurvedicProperties = ({ variant = 'default' }) => {
    const [activeTab, setActiveTab] = useState('turmeric');

    // Ayurvedic properties data
    const properties = {
        turmeric: {
            name: 'Turmeric (Haldi)',
            color: '#FFC107',
            icon: 'fas fa-sun',
            benefits: [
                'Anti-inflammatory properties that soothe skin irritations',
                'Natural antiseptic helping prevent skin infections',
                'Improves blood circulation when in contact with skin',
                'Balances the Pitta dosha according to Ayurveda'
            ],
            description: 'Turmeric has been used in Ayurvedic medicine for thousands of years. The golden color of turmeric-dyed fabric is believed to attract positive energy and prosperity. Wearing turmeric-dyed garments can help alleviate skin issues and provide warmth to the body.'
        },
        indigo: {
            name: 'Indigo (Neel)',
            color: '#3F51B5',
            icon: 'fas fa-moon',
            benefits: [
                'Natural cooling properties ideal for hot climates',
                'Calms the mind and aids in meditation practices',
                'Associated with throat chakra, enhancing expression',
                'Balances the Vata dosha according to Ayurveda'
            ],
            description: 'Indigo has been treasured for its beautiful blue color and cooling properties. Fabrics dyed with indigo are believed to have a calming effect on the nervous system and mind. The blue color is associated with communication and the throat chakra in ancient traditions.'
        },
        madder: {
            name: 'Madder Root (Manjistha)',
            color: '#D32F2F',
            icon: 'fas fa-seedling',
            benefits: [
                'Powerful blood purifying properties',
                'Grounding energy connecting to the earth element',
                'Detoxifying effects when in contact with skin',
                'Balances the Kapha dosha according to Ayurveda'
            ],
            description: 'Madder root produces rich earthy reds and has been used as a medicinal herb in Ayurveda. It\'s considered a blood purifier and detoxifying agent. Wearing madder-dyed fabrics is believed to help ground energy and provide stability and strength.'
        },
        neem: {
            name: 'Neem (Azadirachta indica)',
            color: '#558B2F',
            icon: 'fas fa-leaf',
            benefits: [
                'Natural antibacterial and antifungal properties',
                'Helps alleviate skin conditions like eczema',
                'Natural cooling effect in hot weather',
                'Protects fabric from insects and pests'
            ],
            description: 'Neem has been used in Ayurvedic medicine for over 5,000 years. Fabrics treated with neem retain its medicinal properties and offer protection against various skin disorders. The cooling nature of neem makes it particularly beneficial during summer months.'
        },
        sandalwood: {
            name: 'Sandalwood (Chandan)',
            color: '#BCAAA4',
            icon: 'fas fa-tree',
            benefits: [
                'Natural cooling effect on the body',
                'Subtle fragrance that calms the mind',
                'Helps reduce anxiety and stress',
                'Benefits all three doshas (tridoshic)'
            ],
            description: 'Sandalwood is highly prized in Ayurveda for its cooling and calming properties. Fabrics infused with sandalwood retain a subtle fragrance that has a grounding effect on the mind. It\'s one of the few substances that balances all three doshas in Ayurvedic tradition.'
        }
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const activeProperty = properties[activeTab];

    return (
        <div className={`ayurvedic-properties ${variant}`}>
            <div className="tabs-container">
                {Object.keys(properties).map(key => (
                    <button
                        key={key}
                        className={`tab ${activeTab === key ? 'active' : ''}`}
                        onClick={() => handleTabChange(key)}
                        style={activeTab === key ? { borderColor: properties[key].color } : {}}
                    >
                        <i className={properties[key].icon} style={{ color: properties[key].color }}></i>
                        <span>{properties[key].name.split(' ')[0]}</span>
                    </button>
                ))}
            </div>

            <div className="property-content">
                <div className="property-header" style={{ backgroundColor: `${activeProperty.color}10` }}>
                    <div className="property-icon" style={{ backgroundColor: activeProperty.color }}>
                        <i className={activeProperty.icon}></i>
                    </div>
                    <h3 className="property-name">{activeProperty.name}</h3>
                </div>

                <div className="property-details">
                    <p className="property-description">{activeProperty.description}</p>

                    <div className="benefits-list">
                        <h4>Therapeutic Benefits:</h4>
                        <ul>
                            {activeProperty.benefits.map((benefit, index) => (
                                <li key={index}>
                                    <i className="fas fa-check" style={{ color: activeProperty.color }}></i>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {variant === 'detailed' && (
                        <div className="care-instructions">
                            <h4>Care Instructions:</h4>
                            <p>To preserve the Ayurvedic properties of {activeProperty.name.split(' ')[0]}-dyed fabrics:</p>
                            <ul>
                                <li>Hand wash in cold water with mild natural soap</li>
                                <li>Dry in shade to maintain color and therapeutic properties</li>
                                <li>Store with natural moth repellents like neem leaves</li>
                                <li>Air regularly to maintain the natural properties</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
        .ayurvedic-properties {
          background: white;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        
        .ayurvedic-properties.embedded {
          box-shadow: none;
          background: transparent;
        }
        
        .tabs-container {
          display: flex;
          overflow-x: auto;
          border-bottom: 1px solid var(--border-light);
        }
        
        .tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          min-width: 100px;
          background: none;
          border: none;
          border-bottom: 3px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          gap: 0.5rem;
        }
        
        .tab:hover {
          background: #f5f5f5;
        }
        
        .tab.active {
          background: #f9f9f9;
        }
        
        .tab i {
          font-size: 1.2rem;
        }
        
        .tab span {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
        }
        
        .property-content {
          padding: 1.5rem;
        }
        
        .property-header {
          display: flex;
          align-items: center;
          padding: 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .property-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          margin-right: 1rem;
          flex-shrink: 0;
        }
        
        .property-name {
          font-family: var(--font-display);
          font-size: 1.5rem;
          margin: 0;
          color: var(--text-primary);
        }
        
        .property-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        
        .benefits-list h4, .care-instructions h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        
        .benefits-list ul, .care-instructions ul {
          list-style: none;
          padding: 0;
          margin-bottom: 1.5rem;
        }
        
        .benefits-list li, .care-instructions li {
          display: flex;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        
        .benefits-list li i {
          margin-right: 0.5rem;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }
        
        .care-instructions {
          background: #f9f9f9;
          padding: 1rem;
          border-radius: 0.5rem;
        }
        
        .care-instructions p {
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }
        
        /* Variant-specific styles */
        .ayurvedic-properties.minimal .tabs-container {
          justify-content: center;
        }
        
        .ayurvedic-properties.minimal .property-content {
          padding: 1rem;
        }
        
        .ayurvedic-properties.minimal .property-description {
          display: none;
        }
        
        .ayurvedic-properties.detailed .property-content {
          padding: 2rem;
        }
        
        @media (max-width: 768px) {
          .tab {
            min-width: 80px;
          }
          
          .property-description {
            font-size: 0.9rem;
          }
          
          .property-name {
            font-size: 1.3rem;
          }
        }
      `}</style>
        </div>
    );
};

export default AyurvedicProperties; 