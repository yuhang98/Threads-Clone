import { MantineProvider, createTheme } from '@mantine/core';
import { Dashboard } from './Dashboard';

export default function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
    >
      <Dashboard />
    </MantineProvider>
  );
}
