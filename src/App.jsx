import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import AppBar from './components/appBar/AppBar';
import SearchInput from './components/inputs/SearchInput';
import CardComponet from './components/card/CardComponet';

function App() {
  return (
    <Stack sx={{ width: '100vw', maxWidth: '730px' }} spacing={3}>
      <AppBar />
      <SearchInput />
      <CardComponet />
    </Stack>
  );
}

export default App;
