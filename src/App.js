// App.js
import React, { useState } from 'react';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import MovieListPage from './components/MovieListPage';
import CompanyInfoPage from './components/CompanyInfoPage';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleSignup = (userData) => {
    
    localStorage.setItem('user', JSON.stringify(userData));
    console.log('Signup successful!', userData);
  };

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <>
            <MovieListPage />
            <CompanyInfoPage />
          </>
        ) : (
          <>
            <SignupPage onSignup={handleSignup} />
            <LoginPage onLogin={handleLogin} />
          </>
        )}
      </header>
    </div>
  );
};

export default App;