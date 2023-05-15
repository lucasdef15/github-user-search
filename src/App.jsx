import Stack from '@mui/material/Stack';
import AppBar from './components/appBar/AppBar';
import SearchInput from './components/inputs/SearchInput';
import CardComponet from './components/card/CardComponet';

function App() {
  return (
    <Stack
      sx={{
        width: '90%',
        maxWidth: { sm: '710px', md: '810px' },
        minWidth: '345px',
        margin: '0 auto',
      }}
      spacing={3}
    >
      <AppBar />
      <SearchInput />
      <CardComponet />
    </Stack>
  );
}

export default App;
