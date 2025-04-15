import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simple demo authentication - in production, use a secure method
    // This is just for demonstration purposes
    if (username === 'admin' && password === 'ayurveda123') {
      // Set a session token in localStorage
      localStorage.setItem('adminAuthenticated', 'true');
      router.push('/admin-tasks');
    } else {
      setError('Invalid username or password');
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <Head>
        <title>11Sari - Admin Login</title>
        <meta name="description" content="Admin login for 11Sari" />
      </Head>

      <div className="login-container">
        <div className="login-content">
          <div className="login-header">
            <h1>11Sari Admin</h1>
            <p>Ayurvedic Collection Management</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoFocus
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="login-footer">
            <p>Forgot your password? Contact the system administrator.</p>
            <Link href="/" className="back-link">Return to Website</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f8f8f8 0%, #efefef 100%);
        }
        
        .login-container {
          width: 100%;
          max-width: 400px;
          padding: 1rem;
        }
        
        .login-content {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .login-header {
          background: linear-gradient(135deg, #c80000 0%, #a00000 100%);
          color: white;
          padding: 2rem;
          text-align: center;
        }
        
        .login-header h1 {
          margin: 0;
          font-size: 1.8rem;
          font-weight: 600;
        }
        
        .login-header p {
          margin: 0.5rem 0 0;
          opacity: 0.9;
          font-size: 1rem;
        }
        
        .login-form {
          padding: 2rem;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #555;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .form-group input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          color: #333;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        
        .form-group input:focus {
          border-color: #c80000;
          box-shadow: 0 0 0 3px rgba(200, 0, 0, 0.1);
          outline: none;
        }
        
        .login-button {
          width: 100%;
          padding: 0.75rem;
          background: linear-gradient(to right, #c80000, #c49a37);
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        
        .login-button:hover {
          opacity: 0.9;
        }
        
        .login-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .error-message {
          background-color: #fff8f8;
          color: #c80000;
          padding: 0.75rem;
          border-radius: 4px;
          margin-bottom: 1.5rem;
          border-left: 3px solid #c80000;
          font-size: 0.9rem;
        }
        
        .login-footer {
          padding: 1.5rem 2rem;
          background-color: #f9f9f9;
          text-align: center;
          border-top: 1px solid #eee;
        }
        
        .login-footer p {
          margin: 0 0 0.75rem;
          color: #666;
          font-size: 0.85rem;
        }
        
        .back-link {
          color: #c80000;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .back-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
} 