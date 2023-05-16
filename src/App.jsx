import Stack from '@mui/material/Stack';
import AppBar from './components/appBar/AppBar';
import SearchInput from './components/inputs/SearchInput';
import CardComponet from './components/card/CardComponet';
import { useContext } from 'react';
import DataContext from '/src/contexts/UserContext';
import GlobalStyles from './components/styles/Global.js';

function App() {
  const { dark } = useContext(DataContext);
  return (
    <>
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
    </>
  );
}

export default App;
