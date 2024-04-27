import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Navigation() {
  return (
    <AppBar position="static" style={{ 
      backgroundImage: `url("/1659534121_13-kartinkin-net-p-igrovoi-pattern-krasivo-14.jpg")`, 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: '#6c6666', // Изменил цвет на серый
      boxShadow: 'none',
      height: '10vh' // Для охвата всего заднего фона по вертикали
    }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#FFD700', fontFamily: 'Press Start 2P', fontSize: '24px' }}>GameZone</Link>
        </Typography>
        <Button color="inherit" component={Link} to="/" style={{ fontFamily: 'Press Start 2P', fontSize: '18px' }}>Home</Button>
        <Button color="inherit" component={Link} to="/games" style={{ fontFamily: 'Press Start 2P', fontSize: '18px' }}>Games</Button>
        <Button color="inherit" component={Link} to="/forum" style={{ fontFamily: 'Press Start 2P', fontSize: '18px' }}>Forum</Button>
        <Button color="inherit" component={Link} to="/news" style={{ fontFamily: 'Press Start 2P', fontSize: '18px' }}>News</Button>
        <Button color="inherit" component={Link} to="/contact" style={{ fontFamily: 'Press Start 2P', fontSize: '18px' }}>Contact</Button>
        <Button color="inherit" component={Link} to="/auth" style={{ fontFamily: 'Press Start 2P', fontSize: '18px' }}>Login/Register</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
