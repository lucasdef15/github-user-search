import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import AppBar from './components/appBar/AppBar';
import SearchInput from './components/inputs/SearchInput';

function App() {
  return (
    <Stack sx={{ width: '100vw', maxWidth: '730px' }}>
      <AppBar />
      <SearchInput />
    </Stack>
  );
}

export default App;
