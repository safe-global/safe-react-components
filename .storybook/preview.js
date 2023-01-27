import React from 'react';
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/react';

import {
  Stack,
  ThemeProvider,
  Typography,
  IconButton,
  Card,
  CardContent,
  CssBaseline,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import createSafeTheme from '../src/theme/safeTheme.tsx';
import useThemeMode from '../src/hooks/useThemeMode';

addDecorator((storyFn) => {
  const { switchThemeMode, themeMode } = useThemeMode();

  return (
    <ThemeProvider theme={createSafeTheme(themeMode)}>
      <CssBaseline />
      <Card>
        <CardContent>
          <Stack direction="row" alignItems="center" sx={{ mb: 2 }}>
            <IconButton onClick={switchThemeMode} color="inherit" sx={{ p: 0 }}>
              {themeMode === 'light' ? (
                <Brightness4Icon />
              ) : (
                <Brightness7Icon />
              )}
            </IconButton>
          </Stack>
          {storyFn()}
        </CardContent>
      </Card>
    </ThemeProvider>
  );
});

addParameters({
  options: {
    showRoots: false,
  },
});
