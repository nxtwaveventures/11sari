import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function KnowMore() {
    const [activeTab, setActiveTab] = useState('wedding');

    const seo = {
        title: 'Know More - Sacred Significance',
        description: 'Discover the deep cultural significance and sacred meanings behind different sarees in Indian ceremonies. Learn about traditional sarees for weddings, poojas, and festivals.',
        keywords: ['saree significance', 'indian ceremonies', 'wedding sarees', 'pooja sarees', 'festival wear', 'cultural traditions', 'indian customs'],
        ogImage: '/assets/images/occasions/wedding-saree.jpg'
    };

    const tabContent = {
        wedding: {
            title: 'Wedding',
            sanskrit: 'विवाह',
            image: '/assets/images/occasions/wedding-saree.jpg',
            content: [
                {
                    title: 'Significance',
                    description: 'Red and maroon sarees symbolize marriage and new beginnings. Gold zari work represents prosperity and blessings from the divine.'
                },
                {
                    title: 'Rituals',
                    description: 'Different ceremonies during a wedding call for specific colors and styles, each carrying deep symbolic meaning.'
                },
                {
                    title: 'Traditions',
                    description: 'The Banarasi wedding saree is often passed down as an heirloom, carrying family traditions and blessings.'
                }
            ]
        },
        pooja: {
            title: 'Pooja',
            sanskrit: 'पूजा',
            image: '/assets/images/occasions/pooja-saree.jpg',
            content: [
                {
                    title: 'Significance',
                    description: 'Yellow and gold sarees are worn during prayers to invoke divine blessings. They represent purity and devotion.'
                },
                {
                    title: 'Sacred Colors',
                    description: 'Different deities are associated with specific colors, influencing the choice of saree for particular ceremonies.'
                },
                {
                    title: 'Rituals',
                    description: 'Certain prayers require specific draping styles and colors, maintaining the sanctity of the ritual.'
                }
            ]
        },
        festival: {
            title: 'Festival',
            sanskrit: 'उत्सव',
            image: '/assets/images/occasions/festival-saree.jpg',
            content: [
                {
                    title: 'Significance',
                    description: 'Vibrant colors celebrate the festive spirit. Each festival has its traditional color preferences.'
                },
                {
                    title: 'Seasonal Connection',
                    description: 'Festival sarees often reflect the season - bright colors for spring, rich hues for autumn.'
                },
                {
                    title: 'Regional Variations',
                    description: 'Different regions of India have unique festival saree traditions and styles.'
                }
            ]
        }
    };

    return (
        <Layout seo={seo}>
            <div className="page-header">
                <div className="container">
                    <h1 className="gjs-heading">Sacred <span className="gold-accent">Significance</span></h1>
                    <div className="text-main-content highlighted-text">
                        <p>Explore the rich traditions and deep meanings behind sarees in Indian ceremonies</p>
                    </div>
                </div>
            </div>

            <main className="know-more-content">
                <div className="container">
                    <div className="sacred-tabs">
                        <button
                            className={`tab-button ${activeTab === 'wedding' ? 'active' : ''}`}
                            onClick={() => setActiveTab('wedding')}
                        >
                            Wedding
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'pooja' ? 'active' : ''}`}
                            onClick={() => setActiveTab('pooja')}
                        >
                            Pooja
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'festival' ? 'active' : ''}`}
                            onClick={() => setActiveTab('festival')}
                        >
                            Festivals
                        </button>
                    </div>

                    {Object.keys(tabContent).map(tab => (
                        <div
                            key={tab}
                            className={`sacred-content ${activeTab === tab ? 'active' : ''}`}
                        >
                            <div className="sacred-grid">
                                <div className="sacred-image">
                                    <Image
                                        src={tabContent[tab].image}
                                        alt={`${tabContent[tab].title} Saree`}
                                        width={800}
                                        height={600}
                                        priority
                                    />
                                </div>
                                <div className="sacred-info">
                                    <h3>{tabContent[tab].title} <span className="sanskrit-name">{tabContent[tab].sanskrit}</span></h3>
                                    <div className="benefits-list">
                                        {tabContent[tab].content.map((item, index) => (
                                            <div key={index} className="benefit-item">
                                                <span className="benefit-icon">✧</span>
                                                <div>
                                                    <h4>{item.title}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </Layout>
    );
}