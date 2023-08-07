import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import AppContext from '../components/AppContext';
import Col from 'react-bootstrap/Col';
import './AuthPage.css';

export default function AuthPage({ action }) {
  const navigate = useNavigate();
  const { user, handleSignIn } = useContext(AppContext);

  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  const welcomeMessage =
    action === 'sign-in'
      ? 'Create an account to get started!'
      : 'Create an account to get started!';
  return (
    <Col className="register-page">
      <div className="register-elements">
        <div className="register-elements-text">
          <header className="text-center">
            <p className="text-muted mb-4">{welcomeMessage}</p>
          </header>
          <div className="card p-3 ">
            <AuthForm key={action} action={action} onSignIn={handleSignIn} />
          </div>
        </div>
      </div>
    </Col>
  );
}
