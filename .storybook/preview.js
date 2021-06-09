import { ThemeProvider } from '@emotion/react';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import { CssBaseline, MuiThemeProvider, theme } from '../packages/ui';

/**
 * @type {import('@storybook/react').Parameters}
 */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appContentBg: theme(true).palette.background.paper },
    // Override the default light theme
    light: { ...themes.normal, appContentBg: theme(false).palette.background.paper },
  },
  options: {
    // Sort Story alphabetical
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const ThemeWrapper = props => {
  const brokerTheme = theme(useDarkMode());
  return (
    <MuiThemeProvider theme={brokerTheme}>
      <ThemeProvider theme={brokerTheme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export const decorators = [
  Story => (
    <ThemeWrapper>
      <Story />
    </ThemeWrapper>
  ),
];
