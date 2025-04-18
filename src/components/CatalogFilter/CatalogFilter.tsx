import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 1250 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Biomasa"
          icon={<img src="/biomasa.png" alt="Biomasa" width={24} height={24} />}
        />
        <BottomNavigationAction
          label="Solar"
          icon={<img src="/solar.png" alt="Solar" width={24} height={24} />}
        />
        <BottomNavigationAction
          label="Focos ahorradores"
          icon={<img src="/focos.png" alt="Focos ahorradores" width={24} height={24} />}
        />
        <BottomNavigationAction
          label="Eólica"
          icon={<img src="/eolica.png" alt="Eólica" width={24} height={24} />}
        />
        <BottomNavigationAction
          label="Otros"
          icon={<img src="/otros.png" alt="Otros" width={24} height={24} />}
        />
      </BottomNavigation>
    </Box>
  );
}
