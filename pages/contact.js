import Layout from '@/components/Layout'
import Head from 'next/head'
import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const seo = {
        title: 'Contact Us',
        description: 'Get in touch with 11Sari for inquiries about our authentic Banarasi sarees, custom orders, or customer support. Visit our showroom in Varanasi or reach out online.',
        keywords: ['contact 11sari', 'saree shop contact', 'varanasi showroom', 'customer support', 'custom saree orders', 'banarasi silk inquiry'],
        ogImage: '/assets/images/contact/showroom.jpg'
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // TODO: Implement form submission logic
        console.log('Form submitted:', formData)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <Layout seo={seo}>
            <Head>
                <title>Contact Us - 11Sari</title>
                <meta name="description" content="Get in touch with 11Sari&apos;s customer service team for any queries about our products or services." />
            </Head>
            <div className="page-header">
                <div className="container">
                    <h1 className="gjs-heading">Contact <span className="gold-accent">Us</span></h1>
                    <div className="text-main-content highlighted-text">
                        <p>We&apos;d love to hear from you. Reach out to us for any queries or assistance.</p>
                    </div>
                </div>
            </div>

            <main className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <div className="info-card">
                                <i className="fas fa-map-marker-alt"></i>
                                <h3>Visit Us</h3>
                                <p>11Sari Showroom</p>
                                <p>123 Silk Street, Varanasi</p>
                                <p>Uttar Pradesh, India 221001</p>
                            </div>
                            <div className="info-card">
                                <i className="fas fa-phone"></i>
                                <h3>Call Us</h3>
                                <p><a href="tel:+919663495817">+91 96634 95817</a></p>
                                <p>Mon-Sat: 10am - 7pm IST</p>
                            </div>
                            <div className="info-card">
                                <i className="fas fa-envelope"></i>
                                <h3>Email Us</h3>
                                <p><a href="mailto:info@11sari.com">info@11sari.com</a></p>
                                <p>We&apos;ll respond within 24 hours</p>
                            </div>
                        </div>

                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone (optional)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                    ></textarea>
                                </div>
                                <button type="submit" className="submit-button">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}