import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// MUI Components
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Grid,
  Divider,
} from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  // Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          p: 4,
          boxShadow: 3,
          borderRadius: 3,
          bgcolor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ color: "#10439F" }}>
          Login to Your Dashboard
        </Typography>

        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            margin="normal"
            sx={{
              backgroundColor: "#f4f4f4",
              borderRadius: 1,
            }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            margin="normal"
            sx={{
              backgroundColor: "#f4f4f4",
              borderRadius: 1,
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#10439F",
              "&:hover": {
                backgroundColor: "#0A3378",
              },
            }}
          >
            Log In
          </Button>
        </form>

        <Divider sx={{ width: "100%", my: 2 }}>OR</Divider>

        <Button
          variant="outlined"
          fullWidth
          onClick={handleGoogleSignIn}
          sx={{
            borderColor: "#F27BBD",
            color: "#F27BBD",
            "&:hover": {
              backgroundColor: "#F27BBD",
              color: "#fff",
            },
          }}
        >
          Sign in with Google
        </Button>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <a href="/signup" style={{ color: "#10439F", textDecoration: "none" }}>
            Sign up
          </a>
        </Typography>
      </Box>
    </Container>
  );
}
