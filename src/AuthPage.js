import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';

function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Обработка входа пользователя
    console.log(`Вход: Email - ${email}, Пароль - ${password}`);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Обработка регистрации нового пользователя
    console.log(`Регистрация: Email - ${email}, Пароль - ${password}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>Вход / Регистрация</Typography>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <TextField
          label="Пароль"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <Button variant="contained" onClick={handleLogin} style={{ marginBottom: '20px' }}>Войти</Button>
        <Button variant="contained" onClick={handleRegister} style={{ marginBottom: '20px' }}>Зарегистрироваться</Button>
      </form>
      <Typography variant="body1">Уже есть аккаунт? <Link to="/auth">Войти</Link></Typography>
    </div>
  );
}

export default AuthPage;
