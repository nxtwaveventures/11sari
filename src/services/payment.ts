import { loadStripe, StripeElements } from '@stripe/stripe-js';

// Replace with your Stripe publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export interface PaymentDetails {
    amount: number;
    currency: string;
    description: string;
    customerName: string;
    customerEmail: string;
}

export const createPaymentIntent = async (paymentDetails: PaymentDetails) => {
    try {
        const response = await fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentDetails),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }

        return data;
    } catch (error) {
        console.error('Error creating payment intent:', error);
        throw error;
    }
};

export const processPayment = async (
    paymentDetails: PaymentDetails,
    elements: StripeElements
) => {
    try {
        const stripe = await stripePromise;
        if (!stripe) throw new Error('Stripe failed to initialize');

        // Create payment intent
        await createPaymentIntent(paymentDetails);

        // Confirm the payment using the PaymentElement
        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/payment/success`,
                payment_method_data: {
                    billing_details: {
                        name: paymentDetails.customerName,
                        email: paymentDetails.customerEmail,
                    },
                },
            },
        });

        if (result.error) {
            throw new Error(result.error.message);
        }

        return result;
    } catch (error) {
        console.error('Error processing payment:', error);
        throw error;
    }
}; 