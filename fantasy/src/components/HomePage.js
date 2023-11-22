import React from 'react';

const HomePage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica para manejar el inicio de sesión
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Lógica para manejar la registración
  };

  return (
    <div className="app-container">
      <h1>Fantasy Football</h1>
      <div className="forms-container">
        <div className="form-container">
          <form onSubmit={handleLogin}>
            <label>
              Usuario:
              <input type="text" name="username" />
            </label>
            <label>
              Contraseña:
              <input type="password" name="password" />
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="form-container">
          <form onSubmit={handleSignup}>
            <label>
              Usuario:
              <input type="text" name="username" />
            </label>
            <label>
              Contraseña:
              <input type="password" name="password" />
            </label>
            <label>
              Confirmar Contraseña:
              <input type="password" name="confirmPassword" />
            </label>
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;