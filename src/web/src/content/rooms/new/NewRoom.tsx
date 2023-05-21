import { Helmet } from 'react-helmet-async';
import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import Footer from 'src/components/Footer';

function NewRoom() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Stack spacing={2}>
          <Typography variant="h4" component="h2">
            Choose room name and a voting system
          </Typography>
          <TextField id="room-name" label="Name" variant="outlined" />
          <FormControl fullWidth>
            <InputLabel id="voting-system-select-label">Voting system</InputLabel>
            <Select
              labelId="voting-system-select-label"
              id="voting-system-select"
              label="VotingSystem"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained">Create room</Button>
        </Stack>
      </Box>
    </>
  );
}

export default NewRoom;