import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { SelectChangeEvent } from '@mui/material/Select';

import Logo from '../../../components/LogoSign';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { attemptLogin } from 'src/redux/thunks/auth';
import { useServerError } from '../../../hooks/useServerError';
import { useAppDispatch } from 'src/redux/hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const { serverError, handleServerError } = useServerError();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('alex@ezlab.ru');
  const [role, setRole] = useState('ADMIN');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(attemptLogin({ email: name, password: '' }, navigate)).catch(
      handleServerError
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Logo />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        </Box>
        <ToastContainer autoClose={5000} />
      </Box>
    </Container>
  );
}

export default Login;
