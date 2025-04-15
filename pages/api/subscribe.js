// Next.js API route for handling newsletter subscriptions
// This would typically connect to a service like Mailchimp, SendGrid, etc.

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Please use POST.' });
    }

    try {
        const { email, interests = [], name = '' } = req.body;

        // Validate email
        if (!email || !email.includes('@')) {
            return res.status(400).json({ error: 'Please provide a valid email address.' });
        }

        // Log the subscription (in a real app, you would save to a database or send to an email service)
        console.log('New subscription:', { email, interests, name });

        // In a production environment, you would connect to your email service provider API
        // Example with a fictional API:
        /*
        const response = await fetch('https://api.emailservice.com/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.EMAIL_SERVICE_API_KEY}`
          },
          body: JSON.stringify({
            email,
            name,
            interests,
            list_id: process.env.NEWSLETTER_LIST_ID
          })
        });
    
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Failed to subscribe to newsletter');
        }
        */

        // Track subscription source for analytics
        const source = req.headers.referer || 'direct';
        console.log('Subscription source:', source);

        // Send success response
        return res.status(200).json({
            success: true,
            message: 'Thank you for subscribing to our newsletter! You will receive updates on our latest collections and Ayurvedic wellness tips.'
        });
    } catch (error) {
        console.error('Newsletter subscription error:', error);

        return res.status(500).json({
            success: false,
            message: 'Something went wrong. Please try again later.'
        });
    }
} 