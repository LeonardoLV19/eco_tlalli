'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BackHandIcon from '@mui/icons-material/BackHand';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import { useRouter } from 'next/navigation';

export default function RightDrawer() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string | null>(null);
  const router = useRouter();

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setOpen(open);
    };

  const menuItems = [
    { text: 'Inicio', icon: <HomeIcon />, id: 'inicio', href: '/' },
    { text: 'Nombre', icon: <PersonIcon />, id: 'nombre' },
    { text: 'Correo', icon: <MailIcon />, id: 'correo' },
    { text: 'Teléfono', icon: <LocalPhoneIcon />, id: 'telefono' },
    { text: 'Huella', icon: <BackHandIcon />, id: 'huella', href: '/CarbonResults' },
    { text: 'Historial', icon: <HistoryIcon />, id: 'historial', href: '/purchases-quotes' },
  ];

  const handleClick = (id: string, href?: string) => {
    setSelected(id);
    if (href) {
      router.push(href);
      setOpen(false); // cerrar el drawer después de navegar
    }
  };

  const list = () => (
    <Box
      sx={{
        width: 330,
        bgcolor: 'white',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <AccountCircleIcon sx={{ fontSize: 100, color: '#5DAF5D' }} />
        <h2 className="text-2xl font-bold text-green-900 mt-3 -mb-2">EcoTlalli</h2>
      </Box>

      <List>
        {menuItems.map(({ text, icon, id, href }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton
              onClick={() => handleClick(id, href)}
              sx={{
                borderRadius: 1,
                backgroundColor: selected === id ? '#E2F4E2' : 'transparent',
                '&:hover': {
                  backgroundColor: '#E2F4E2',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: selected === id ? '#5DAF5D' : 'black',
                  minWidth: '40px',
                }}
              >
                {React.cloneElement(icon, {
                  sx: { color: selected === id ? '#5DAF5D' : 'black' },
                })}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ color: selected === id ? '#2F4F2F' : 'black' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)} color="inherit">
        <PersonIcon sx={{ fontSize: 28, color: '#5DAF5D', cursor: 'pointer' }} />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
