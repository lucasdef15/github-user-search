import Stack from '@mui/material/Stack';
import AppBar from './components/appBar/AppBar';
import SearchInput from './components/inputs/SearchInput';
import CardComponet from './components/card/CardComponet';
import DataContext from '/src/contexts/UserContext';
import GlobalStyles from './components/styles/Global.js';
import { useContext } from 'react';
// import theme from './themes/mainTheme';
import Theme from './themes/mainTheme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  const { dark } = useContext(DataContext);
  const theme = Theme(dark);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles dark={dark} />
      <Stack
        sx={{
          width: '90%',
          maxWidth: { sm: '650px', md: '810px' },
          minWidth: '345px',
          margin: '0 auto',
        }}
        spacing={3}
      >
        <AppBar />
        <SearchInput />
        <CardComponet />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
