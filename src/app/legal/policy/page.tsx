import React from 'react';

export default function PolicyPage() {
    return (
        <main className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-center mb-12">Our Policies</h1>

                <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Purchase & Reservation</h2>
                        <p className="text-gray-600">
                            When you reserve a digital saree on our website, you are securing your unique saree for delivery.
                            Once your reservation is confirmed, we will begin the process of preparing your saree for shipment.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Delivery</h2>
                        <p className="text-gray-600">
                            We deliver your saree to the address you provide during checkout.
                            You will receive updates about your order status and delivery timeline by email.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Returns & Exchanges</h2>
                        <p className="text-gray-600">
                            If you receive a saree that is damaged or not as described, please contact us within 7 days of delivery.
                            We will arrange for a return or exchange as quickly as possible.
                            Please note that sarees must be unused and in their original packaging for returns.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Authenticity Guarantee</h2>
                        <p className="text-gray-600">
                            Every saree you purchase from us is digitally certified for authenticity.
                            This means you can be confident that your saree is unique and verified by our secure technology.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
                        <p className="text-gray-600">
                            We respect your privacy. Your personal information is used only to process your order and communicate with you about your purchase.
                            We do not share your information with third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p className="text-gray-600">
                            If you have any questions about our policies, please email us at support@11sari.com.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
} 